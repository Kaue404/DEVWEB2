new Vue({
    el: '#app',
    data: {
        display: '0',
        operacao: '',
        numeroAnterior: null,
        calculoPendente: false
    },
    methods: {
        adicionarDigito: function (digito) {
            if (this.display === '0' || this.calculoPendente) {
                this.display = digito;
                this.calculoPendente = false;
            } else {
                this.display += digito;
            }
        },
        adicionarOperacao: function (op) {
            if (this.calculoPendente) {
                this.operacao = op;
            } else {
                this.calcularResultado();
                this.operacao = op;
                this.calculoPendente = true;
            }
            this.numeroAnterior = parseFloat(this.display);
        },
        calcularResultado: function () {
            const numeroAtual = parseFloat(this.display);
            if (this.operacao === '+') {
                this.display = (this.numeroAnterior + numeroAtual).toString();
            } else if (this.operacao === '-') {
                this.display = (this.numeroAnterior - numeroAtual).toString();
            } else if (this.operacao === '*') {
                this.display = (this.numeroAnterior * numeroAtual).toString();
            } else if (this.operacao === '/') {
                if (numeroAtual !== 0) {
                    this.display = (this.numeroAnterior / numeroAtual).toString();
                } else {
                    this.display = 'Erro';
                }
            }
            this.calculoPendente = false;
        },
        limparDisplay: function () {
            this.display = '0';
            this.operacao = '';
            this.numeroAnterior = null;
            this.calculoPendente = false;
        }
    }
});