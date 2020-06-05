import axios from 'axios';

export default {
    state: {
        faculties: [],
        characters: [],
        spells: []
    },
    mutations: {
        setFaculties(state, data) {
            state.faculties = data;
        },
        setCharacters(state, dataCh) {
            state.characters = dataCh;
        },
        setSpells(state, dataSp) {
            state.spells = dataSp;
        }
    },
    actions: {
        async loadData(ctx, payload) {
            const data = (await axios.get('https://www.potterapi.com/v1/houses?key=$2a$10$p5MbsUyJK.dIzFgks/CfM.Zjm4msL3hYB8OtdU2KIqx1q8O05qK6q')).data;
            ctx.commit('setFaculties', data);

            const dataCh = (await axios.get('https://www.potterapi.com/v1/characters?key=$2a$10$p5MbsUyJK.dIzFgks/CfM.Zjm4msL3hYB8OtdU2KIqx1q8O05qK6q')).data;
            ctx.commit('setCharacters', dataCh);

            const dataSp = (await axios.get('https://www.potterapi.com/v1/spells?key=$2a$10$p5MbsUyJK.dIzFgks/CfM.Zjm4msL3hYB8OtdU2KIqx1q8O05qK6q')).data;
            ctx.commit('setSpells', dataSp);
        }
    }
}