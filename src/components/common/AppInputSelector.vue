<template>
    <v-layout row wrap class="pt-5" justify-center>

    <!-- selectors[0].data -->
    <v-flex xs12 sm10 md8 lg6>
        <h4 style="text-align:left;">First selector:Partner</h4>
        <v-card class="pa-4 mb-4">  
            <v-autocomplete
            :items="this.$store.state.appInputSelector.selectors[0].data"
            @keyup="firstSelector"
            @change="firstSelector"
            v-model="selectors[0].selectedData"
            ></v-autocomplete> 
        </v-card>
    </v-flex>

    <!-- selector[1].data -->
    <v-flex xs12 sm10 md8 lg6>
        <h4 style="text-align:left;">Second selector: Place</h4>
        <v-card class="pa-4 mb-4">  
            <v-autocomplete
            :items="this.$store.state.appInputSelector.selectors[1].data"
            @keyup="secondSelector"
            @change="secondSelector"
            v-model="selectors[1].selectedData"
            ></v-autocomplete> 
        </v-card>
    </v-flex>
    <v-flex xs12>

            <v-btn 
            v-if='selectors[0].selectedData || selectors[1].selectedData'
            @click='sendSelectedData'
            > Submit </v-btn>
        </v-flex>
    </v-layout>
</template>

<script>
import { types } from '@/env'
import { setTimeout } from 'timers';
export default {
    data() {
        return {
            selectors: [
                // firstSelector
            {   
                id:0,
                lastData: '',
                previousData: '',
                selectedData: '',
                previousSelectedData: '',
                bounce: true
            },
                // secondSelector
            {   
                id:1,
                lastData: '',
                previousData: '',
                previousSelectedData: '',
                selectedData: '',
                bounce: true
            }
            ]
        }
    },
    watch: {
        selectors: {
            handler: function(newValue) {
                const storedSelectedDataZero = this.$store.state.appInputSelector.selectors[0].selectedData;
                const storedSelectedDataFirst = this.$store.state.appInputSelector.selectors[1].selectedData;
                const newSelectedDataZero = newValue[0].selectedData;
                const newSelectedDataFirst = newValue[1].selectedData;
                if(newSelectedDataZero && newSelectedDataZero !== storedSelectedDataZero) {
                    this.$store.dispatch(types.ACTION_STORE_INPUT_SELECTOR_SELECTED_DATA, {selector: 0, data: newSelectedDataZero})
                }
                if(newSelectedDataFirst && newSelectedDataFirst !== storedSelectedDataFirst) {
                    this.$store.dispatch(types.ACTION_STORE_INPUT_SELECTOR_SELECTED_DATA, {selector: 1, data: newSelectedDataFirst})
                }
            },
            deep: true
        }
    },
    methods: {
        // selectorZeroSelectedData
        firstSelector (e) {            
            const actionName = 'ACTION_RECEIVE_INPUT_SELECTOR_DATA';
            const selectorNumber = 0;
            if( this.selectors[0].selectedData && this.selectors[0].selectedData != this.selectors[0].previousSelectedData ) {
                this.selectors[0].previousSelectedData = this.selectors[0].selectedData
                // on change first selector change def values of the second
                this.$store.dispatch(types[actionName], {
                targetValue: '',
                selectorNumber: 1, 
                selectorData: '',
                selectorZeroSelectedData: this.selectors[0].selectedData,
                selectorFirstSelectedData: '',
                });
                return;
            }
            return this.getDataCommonFunc(e, selectorNumber, actionName)
        },
        secondSelector (e) {
            const actionName = 'ACTION_RECEIVE_INPUT_SELECTOR_DATA';
            const selectorNumber = 1;
            if( this.selectors[1].selectedData && this.selectors[1].selectedData != this.selectors[1].previousSelectedData ) {
                this.selectors[1].previousSelectedData = this.selectors[1].selectedData
                // on change first selector change def values of the second
                this.$store.dispatch(types[actionName], {
                targetValue: '',
                selectorNumber: 0, 
                selectorData: '',
                selectorZeroSelectedData: '',
                selectorFirstSelectedData: this.selectors[1].selectedData,
                });
                return;
            }
            return this.getDataCommonFunc(e, selectorNumber, actionName)
        },
        sendSelectedData () {
            const actionName = 'ACTION_SEND_INPUT_SELECTOR_SELECTED_DATA';
            // send data: appSelector, appDataSelector, appInputSelector
            const payload = {
              selectedParams: {
                appSelector: this.$store.state.appSelector.value,
                appDataSelector: this.$store.state.appDataSelector,
                appInputSelectorZeroSelectedData: this.$store.state.appInputSelector.selectors[0].selectedData,
                appInputSelectorFirstSelectedData: this.$store.state.appInputSelector.selectors[1].selectedData
              }
            }
            
            this.$store.dispatch(types.ACTION_RECEIVE_TABLE_DATA, payload)
            return true
        },
        getDataCommonFunc (e, selectorNumber, actionName) {            
            this.selectors[selectorNumber].lastData = e.target ? e.target.value : this.selectors[0].selectedData;
            if (this.selectors[selectorNumber].lastData && this.selectors[selectorNumber].lastData.length > 2 && this.selectors[selectorNumber].bounce) {
                this.bounce = false;
                if(this.selectors[selectorNumber].previousData
                && this.selectors[selectorNumber].previousData.indexOf(this.selectors[selectorNumber].lastData) === 0 
                && this.selectors[selectorNumber].lastData.length - this.selectors[selectorNumber].previousData.length === 1 || 0) return;

                this.$store.dispatch(types[actionName], {
                    targetValue: e.target.value,
                    selectorNumber, 
                    selectorData: this.selectors[selectorNumber].selectedData,
                    selectorZeroSelectedData: this.selectors[0].selectedData ? this.selectors[0].selectedData : '',
                    });
                    
                this.previousData = this.selectors[selectorNumber].lastData;
                setTimeout(() => {this.selectors[selectorNumber].bounce = true}, 2000)
            }
        },
    },
    created () {
        this.$store.dispatch(types.ACTION_RECEIVE_INPUT_SELECTOR_DATA, {
            targetValue: '',
            selectorNumber: '', 
            selectorData: '',
            selectorZeroSelectedData: '',
            default:true
        })
    },

}
</script>

<style scoped>

</style>