let taxa_cobranca_saque = 0.05;
let taxa_cobranca_deposito = 0.10;

class Conta {

    constructor(numero, cliente, saldo, agencia, limite) {
        this._numero = numero;
        this._cliente = cliente;
        this._saldo = saldo;
        this._agencia = agencia;
        this._limite = limite;
    }
    // Contas possuem operações de saque e deposíto
    sacar(valor_saque) {
        console.log(`Saldo atual: ${this._saldo}`)
        return console.log(`Saldo após saque: ${this._saldo - valor_saque - (taxa_cobranca_saque)}`);
    }

    depositar(valor_deposito) {
        console.log(`Saldo: ${this._saldo}`)
        return console.log(`Saldo após depósito: ${this._saldo + valor_deposito - (taxa_cobranca_deposito)}`);
    }
}

class ContaCorrente extends Conta {
    constructor(numero, cliente, saldo, agencia,limite, conta_especial) {
        super(numero, cliente, saldo, agencia,limite);
        this._conta_especial = conta_especial;
    }
    //conta especial reduz pela metade as taxas cobradas sob as operações bancárias 
    sacar(valor_saque) {
        console.log(`Saldo atual: ${this._saldo}`)
        return console.log(`Saldo após saque: ${this._saldo - valor_saque - (taxa_cobranca_saque / 2)}`);
    }

    depositar(valor_deposito) {
        console.log(`Saldo: ${this._saldo}`)
        return console.log(`Saldo após depósito: ${this._saldo + valor_deposito - (taxa_cobranca_deposito / 2)}`);
    }

}

const ContaCorrente1 = new ContaCorrente(11111, 'luma montes', 1000, 12123 , 3000, true, null);


class ContaPoupanca extends Conta {

    constructor(numero, cliente, saldo, agencia, limite, conta_especial, variacao) {
        super(numero, cliente, saldo, agencia,limite, conta_especial);
        //faz referência à categoria de investimento desta conta poupança
        this._variacao = variacao;
    }

    gerarRendimento() {
        // esta operação corresponde a um acrescimo de 5% no saldo da conta e será executada mensalmente
        console.log(`Saldo: ${this._saldo}`);
        this._saldo += ((5 * this._saldo) / 100);
        return console.log(`Rendimento ${this._saldo}`);
    }

}

const ContaPoupanca1 = new ContaPoupanca(11111, 'luma góes', 1000, 1234, 3000,false, 50);
// ContaPoupanca1.gerarRendimento();


class Funcionarios {
    constructor(nome, cpf, salario) {
        this._nome = nome;
        this._cpf = cpf;
        this._salario = salario;
    }
    concederEmprestimo(valor_emprestimo, conta) {
        console.log(`Saldo atual: ${conta._saldo}`);
        return console.log(`Saldo atual após empréstimo: ${valor_emprestimo + conta._saldo}`);
    }
}

class Gerentes extends Funcionarios {
    aumentarLimiteContaCorrente(valor_limite, conta) {
        // executa a operação de aumento de limite de uma conta corrente
        console.log(`Limite atual: ${conta._limite}`);
        return console.log(`Novo limite: ${conta._limite + valor_limite}`);
    }
}
const gerenteLuma = new Gerentes('lumix', '1', 400);
// gerenteLuma.aumentarLimiteContaCorrente(200, ContaCorrente1);
// gerenteLuma.concederEmprestimo(200, ContaCorrente1);

// Atendentes
class Atendentes extends Funcionarios {
    verificaPendenciasCadastro(cliente) {
        //     verifica se há pendencias com o cadastro do cliente ( dados não informados ou incosistência a respeito do cliente)
        // console.log(cliente);
        if(cliente._numero < 0 || cliente._numero === '' ){
            console.log(`Cadastro incompleto! Informe o numero da conta`);
        }else if(cliente._cliente === ''){
            console.log(`Cadastro incompleto! Informe o cliente`);
        }else if(cliente._agencia === ''){
            console.log(`Cadastro incompleto! Informe a agencia`);
        }else if(cliente._saldo == '') {
            console.log(`Cadastro incompleto! Informe o saldo da conta`);
        }else if(cliente._limite == ''){
            console.log(`Cadastro incompleto! Informe o limite da conta`);
        }else{
        console.log('Cadastro completo');
        }
    }
}

const atendenteLuma = new Atendentes('lumaa', '1', 400);
// atendenteLuma.verificaPendenciasCadastro(ContaCorrente1);

