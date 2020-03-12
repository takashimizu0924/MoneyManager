<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn text v-on="on" class="light-blue darken-1 white--text">商品登録</v-btn>
        </template>
        <v-card>
                <v-card-title>
                    <h2>新しい商品を登録します</h2>
                </v-card-title>
            </v-card>
    </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialog:false,
        }
    },
}
</script>