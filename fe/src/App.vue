<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Bevásárló lista</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-content>
      <v-container>
        <v-layout>
          <v-flex xs12 md4>
            <v-text-field
              label="Venni"
              v-model="venni"
              @keyup.enter="f()"
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
      <v-container>
        <v-layout>
          <v-flex xs12 md4>
            <div :key="i" v-for="(mit,i) in t">
            {{mit.mit}}
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      venni: '',
      t: []
    }
  },
  mounted() {
    this
      .axios
      .get("http://localhost:3000/getall/")
      .then( resp => this.t=resp.data )
  },
  methods: {
    f() {
      this
        .axios
        .post("http://localhost:3000/ment/",{mit: this.venni})
        .then( resp => {
            this.t.push({mit: this.venni})
            this.venni=''
        } )


    }
  }
}
</script>
