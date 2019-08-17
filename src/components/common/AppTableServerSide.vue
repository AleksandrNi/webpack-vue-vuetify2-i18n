<template>
    <div>
        <vue-good-table
        mode="remote"
        @on-page-change="onPageChange"
        @on-sort-change="onSortChange"
        @on-column-filter="onColumnFilter"
        @on-per-page-change="onPerPageChange"
        
        :pagination-options="{
        enabled: true,
        }"
        :columns="columns"
        :rows="rows"
        :totalRows="totalRecords"
        />
    </div>
</template>

<script>
import { types } from '@/env'

export default {
    data() {
        return {
            isLoading: false,
            serverParams: {
                columnFilters: {
                },
                sort: {
                    field: '', 
                    type: '',
                },
                page: 1, 
                perPage: 10
            }
        }; 
    },
    computed: {
        columns() {
            return this.$store.state.appTableServerSide.columns 
        },
        rows () {
            return this.$store.state.appTableServerSide.rows
        },
        totalRecords () {
            return this.$store.state.appTableServerSide.totalRecords  
        },
    },
    methods: {
        updateParams(newProps) {
            this.serverParams = Object.assign({}, this.serverParams, newProps);
        },
        
        onPageChange(params) {
            this.updateParams({page: params.currentPage});
            this.loadItems();
        },

        onPerPageChange(params) {
            console.log(params);
            if( params.currentPerPage != this.serverParams.perPage ) {
                this.updateParams({perPage: params.currentPerPage});
                this.loadItems();
                }
            this.serverParams.perPage = params.currentPerPage; 
        },

        onSortChange(params) {
            this.updateParams({
                sort: [{
                type: params[0].type,
                field: params[0].field,
                }],
            });
            this.loadItems();
        },
        
        onColumnFilter(params) {
            this.updateParams(params);
            this.loadItems();
        },

        // load items is what brings back the rows from server
        loadItems() {
            this.getFromServer(this.serverParams);
        },

        getFromServer(params) {            
            this.$store.dispatch(types.ACTION_RECEIVE_SORTED_TABLE_DATA, params)
        }
    },
    created () {
        this.$store.dispatch(types.ACTION_RECEIVE_TABLE_DATA, {default: true});
    },
}
</script>

<style lang="scss">

</style>