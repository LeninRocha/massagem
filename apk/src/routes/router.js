import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from "../pages/Home"
import Bambuterapia from "../pages/Bambuterapia"
import Contatos from "../pages/Contatos"
import Espaco from "../pages/Espaco"
import Missao from "../pages/Missao"
import PedraQuente from "../pages/Pedra-quente"
import Relaxante from "../pages/Relaxante"
import TantricaCasal from "../pages/Tantrica-casal"
import TantricaIndividualHomem from "../pages/TantricaIndividualHomem"
import TantricaIndividualMulher from "../pages/TantricaIndividualMulher"
import TerapeutasHomem from "../pages/TerapeutasHomem"
import TerapeutasMulher from "../pages/TerapeutasMulher"
import Ventosaterapia from "../pages/Ventosaterapia"
import Terapeutica from "../pages/Terapeutica"
const routes =[
    {
        path: "/",
        component: Home,
    },
    {
        path: "/bambuterapia",
        component: Bambuterapia,
    },
    {
        path: "/contatos",
        component: Contatos,
    },
    {
        path: "/espaco",
        component: Espaco,
    },
    {
        path: "/missao",
        component: Missao,
    },
    {
        path: "/Pedra-quente",
        component: PedraQuente,
    },
    {
        path: "/relaxante",
        component: Relaxante,
    },
    {
        path: "/tantrica-casal",
        component: TantricaCasal,
    },
    {
        path: "/tantica-individual-homem",
        component: TantricaIndividualHomem,
    },
    {
        path: "/tantica-individual-mulher",
        component: TantricaIndividualMulher,
    },
    {
        path: "/terapeutas-homem",
        component: TerapeutasHomem,
    },
    {
        path: "/terapeutas-mulher",
        component: TerapeutasMulher,
    },
    {
        path: "/ventosaterapia",
        component: Ventosaterapia,
    },
    {
        path: "/terapeutica",
        component: Terapeutica,
    },
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router