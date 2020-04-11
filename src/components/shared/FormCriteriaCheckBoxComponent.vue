<template>
  <div class="FormCriteriaCheckBoxComponent ml-2 mb-2">
    <div class="collapsed-form-item">
      <b-button v-b-toggle="id + '-toggle'" size="sm" variant="secondary" class="btn-block">{{toggleText}}
        <b-icon icon="arrows-collapse" class="justify-content-end"/>
      </b-button>
      <b-collapse :id="id + '-toggle'" class="mt-2">
        <b-form-group :id="id" :label="label" label-for="input-3">
          <b-form-checkbox-group
            :options="options"
            class="mb-3"
            text-field="name"
            v-on:change="update"
            disabled-field="notEnabled"/>
        </b-form-group>
      </b-collapse>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      options: Array,
      id: String,
      label: String,
      toggleText: String,
      value: Array,
      selected: Array,
    },
    methods: {
      update: function (value) {
        this.$emit('setSelected', [...value])
      }
    }
  }
</script>
