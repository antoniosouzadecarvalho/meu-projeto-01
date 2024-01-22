const re = new RegExp();

var myReg = re.test("")
console.log(myReg)



// ^A     | Corresponde se a primeira letra da expressao for A: Exemplo "Antonio" 
// $r     | Corresponde se a ultima letra da expressao for r: Exemplo "Correr"
// bo*    | Corresponde a expressao que o procede 0 ou mais vezes. Equivalente /bo{0,}/: Exemplo "boolean" ou "bird"
// a+     | Corresponde a expressão que o precede repetido 1 ou mais vezes. Equivalente a {1,}: Exemplo: "Candy" ou "Caaandy"...
// ?      | Corresponde a expressão que o precede repetido 0 ou 1 vez. Equivalente à {0,1}.
// x(?=y) | Pesquisa correspondência em 'x' apenas se 'x' é seguido por 'y'. Isso é chamado de lookahead
// x(?!y) | Pesquisa correspondência em 'x' apenas se 'x' não é seguido por 'y'. Isso é chamado negação lookahead.
// {n}    | Pesquisa n ocorrências correspondentes ao caracter precedido. Onde, n deve ser um inteiro positivo.
// {n,m}  | Pesquisa a n menor correspondência e a m maior correspondência do caractere precedido. Quando n ou m é zero, ele poderá ser omitido. Onde, n e m devem ser        inteiros positivo. 
//