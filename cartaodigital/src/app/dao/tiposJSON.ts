export type BeneficioEstrutura = {
    idBeneficio: number;
    descricaoBeneficio: string;
    status: string;
    quantidade: number;
}

export type BeneficioUsuario = {
    codFuncionario: string;
    nomeFuncionario: string;
    beneficios: Array<BeneficioEstrutura>;
}

export type BeneficioJSON = {
    beneficios: Array<BeneficioUsuario>;
    terceiros: Array<BeneficioUsuario>;
}





export type BeneficiarioJSON = {
    identificacaoTerceiro: string;
    nomeTerceiro: string;
}





export type LoginJSON = {
                codFuncionario: string,
                nomeFuncionario: string,
                nascimento: string,
                administrativo: boolean,
                entregaproduto: boolean
}

export type xlsxPayloadJSON = {
    idEvento:string,
    beneficiarios:Array<BeneficiarioPayload>,
    beneficios:Array<string>,
    beneficioBeneficiario: {
        [beneficio:string]: [{ cpf:string, quantidade:Number }?]
    }
}

export type BeneficiarioPayload = {
    nome:string,
    nascimento:string,
    edv:Number,
    cpf:string,
    unidade:string
}


export type EventosJSON = {
    idEvento: string;
    nomeEvento: string;
    descricaoEvento: string;
    dataInicio: string;
    dataTermino: string;
    inativo: boolean;
  }






export type EventosBeneficioJSON = {
    idEvento: number;
    idBeneficio: number;
    descricaoBeneficio: string;
}






export type EventosUsuariosJSON = {
    idEvento: number;
    codFuncionario: string;
    nomeFuncionario: string;
    cpf: string;
    area: string;
    username: string;
    dataInclusao: string;
    beneficios: Array<BeneficioEstrutura>;
}


export const linkServidor = "http://localhost:5127/";