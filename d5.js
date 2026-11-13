Q(3,1,"Biologia","Bioenergética: ATP e metabolismo",2,`No laboratório de bioquímica de uma universidade federal cearense, a professora Renata abre o semestre com uma provocação: antes de existirem folhas, músculos ou neurônios, a vida já precisava de uma moeda para pagar suas contas químicas — e certas rotas metabólicas só puderam se estabelecer depois desse marco.

A adenosina trifosfato (ATP) é reconhecida como a principal fonte de energia celular, desempenhando um papel crucial em diversas reações metabólicas essenciais para a vida.

Considerando a evolução dos seres vivos e o surgimento do ATP como molécula energética, qual dos processos descreve corretamente uma atividade biológica que se tornou possível logo após o desenvolvimento da capacidade de utilizar o ATP?`,["Glicólise, processo metabólico que ocorre na ausência de ATP.","Ciclo de Krebs, processo metabólico dependente da energia fornecida pelo ATP.","Fermentação, um processo que não depende diretamente da utilização de ATP.","Fotossíntese, processo que não depende diretamente da utilização de ATP.","Ciclo de Krebs, onde ocorre a oxidação de moléculas de acetil-CoA para gerar energia."],"E",`A glicólise investe 2 ATP (A cai); a fermentação embute a glicólise (C cai); a fotossíntese consome ATP no ciclo de Calvin (D cai).

Entre as duas sobre Krebs, B inverte o papel da via (oxidativa, não consumidora líquida de ATP). A descrição fiel é a oxidação de acetil-CoA para gerar energia.`);

Q(3,2,"Matemática","Probabilidade: jogo de dados",3,`Na feira de matemática de um colégio do Cariri cearense, a professora Elisa montou uma banca de jogos de azar pedagógicos para discutir tomada de decisão, com a pergunta: "escolher mais dados é sempre vantagem?".

Arthur e João participam de um jogo de dados com regras específicas. No jogo, são utilizados três dados comuns (com faces numeradas de 1 a 6). Arthur tem o direito de escolher dois desses dados para jogar, enquanto João fica com o dado restante. O objetivo do jogo é determinar quem obtém o maior número no lançamento dos dados. Arthur joga seus dois dados simultaneamente, e João lança o seu dado individualmente. Em caso de empate entre o maior número obtido por Arthur e o número de João, a vitória é atribuída a João.

Considerando as regras do jogo, qual é a probabilidade de Arthur ou João vencerem o jogo?`,["A probabilidade de Arthur vencer o jogo é de 81/216.","A probabilidade de João vencer o jogo é de 45/216.","A probabilidade de Arthur vencer o jogo é de 100/216.","A probabilidade de João vencer o jogo é de 35/216.","A probabilidade de Arthur vencer o jogo é de 125/216."],"E",`Espaço: 216 resultados. P(máximo de dois dados ≤ j) = j²/36; para cada valor j de João, Arthur vence em 36 − j² pares.

Soma para j = 1..6: 35 + 32 + 27 + 20 + 11 + 0 = 125. P(Arthur) = 125/216 ≈ 58%; João fica com 91/216.`);

Q(3,3,"Matemática","Probabilidade sem reposição",3,`Na abertura do treinamento semestral de uma concessionária de Belo Horizonte, a gerente Sandra embaralha as chaves diante de todos, enfileira os cinco participantes e explica que ninguém terá segunda chance.

Em uma concessionária, cinco funcionários precisam testar um novo modelo de carro. Na bancada, há cinco chaves, mas apenas uma delas é a chave correta para ligar o veículo. Os funcionários, em ordem, pegam uma chave por vez, testam e, caso não funcione, a descartam. O terceiro funcionário na fila é quem, finalmente, consegue a chave que liga o carro e ganha um bônus especial.

Qual a probabilidade de o terceiro funcionário ser o sortudo a encontrar a chave correta e, consequentemente, ganhar o bônus?`,["1/5","4/5","1/4","3/5","2/5"],"A",`4/5 × 3/4 × 1/3 = 1/5. Atalho: num sorteio sem reposição, a chave certa tem a mesma chance de estar em qualquer das cinco posições.`);

Q(3,4,"Química","Tensoativos e peróxido: descontaminação do solo",2,`Em um sítio no interior do Ceará, o vazamento do tanque de diesel deixou uma mancha escura no terreiro. A engenheira ambiental Luana explicou que raspar a terra só empurraria o problema para outro lugar e propôs tratar o solo com química.

Em uma área rural, detectou-se a contaminação do solo por hidrocarbonetos, substâncias prejudiciais ao meio ambiente. Dentre as técnicas disponíveis, a utilização de tensoativos e peróxido de hidrogênio (água oxigenada) demonstrou-se promissora.

Os tensoativos, compostos que possuem propriedades específicas, e o peróxido de hidrogênio, conhecido por suas características oxidantes, podem desempenhar papéis importantes na remoção dos hidrocarbonetos do solo.

Qual das alternativas abaixo explica corretamente a utilidade de cada um desses agentes no processo de descontaminação do solo?`,["Os tensoativos formam micelas, estruturas que aprisionam os hidrocarbonetos, facilitando sua separação do solo. O peróxido de hidrogênio atua como um agente redutor, eliminando impurezas presentes no solo.","Os tensoativos são úteis para remover hidrocarbonetos porque agem como agentes oxidantes. O peróxido de hidrogênio forma micelas que ajudam a dissolver os hidrocarbonetos no solo.","Os tensoativos formam micelas, que envolvem os hidrocarbonetos, tornando-os mais solúveis em água e facilitando sua remoção. O peróxido de hidrogênio, por sua vez, auxilia na oxidação dos hidrocarbonetos, quebrando-os em compostos menos nocivos.","Os tensoativos ajudam na remoção dos hidrocarbonetos, pois formam uma barreira protetora ao redor deles, evitando sua dispersão. O peróxido de hidrogênio, por outro lado, age como um solvente que dissolve os hidrocarbonetos.","Os tensoativos atuam como agentes redutores, transformando os hidrocarbonetos em compostos inofensivos. O peróxido de hidrogênio age como um solvente que dissolve os hidrocarbonetos no solo."],"C",`Tensoativos (anfifílicos) formam micelas que solubilizam o contaminante em água; o H₂O₂ oxida as cadeias em compostos menos nocivos. Quem lembra que "água oxigenada oxida" elimina quatro opções.`);

Q(3,5,"Matemática","Análise combinatória: códigos de barras",3,`Na expedição de uma distribuidora cearense de castanha-de-caju, o analista Paulo desenhou do zero o padrão de identificação da empresa e quer saber se o formato dá conta de todos os produtos.

Uma empresa utiliza códigos de barras de 13 dígitos para identificar seus produtos:
Padrão Inicial: os três primeiros dígitos do código são fixos (por exemplo, 7, 5 e 6).
Conjunto Restrito: os seis dígitos seguintes (posições 4 a 9) podem ser formados a partir de um conjunto limitado de quatro números possíveis (por exemplo, 4, 7, 9 e 8).
Conjunto Amplo: os três dígitos seguintes (posições 10 a 12) podem ser qualquer número de 0 a 9.
Dígito de Verificação: o último dígito (posição 13) é calculado automaticamente a partir dos dígitos anteriores, portanto não oferece opções de escolha.

Considerando essas restrições, quantas combinações diferentes de códigos de barras podem ser formadas?`,["4⁶ × 10³","4⁵ × 10⁴","4⁶ × 10²","4⁷ × 10³","4⁶ × 10²"],"A",`Fixos (1) × 4⁶ × 10³ × verificador (1) = 4⁶ × 10³. (A opção 4⁶ × 10² aparece repetida no material de origem.)`);

Q(3,6,"Física","Calorimetria: frenagem e energia cinética",1,`No centro de provas de uma montadora em Betim, o engenheiro Caio conduz ensaios de um novo sistema de freios; cada frenagem é registrada por sensores de temperatura instalados junto ao conjunto de aço.

Em um teste de segurança veicular, o sistema de frenagem de um carro converte a energia cinética do veículo em calor, que é absorvido por uma massa de aço presente no sistema. Dados:
Calor específico do aço: c = 460 J/kg°C
Massa do carro: 1500 kg
Velocidade inicial do carro: 20 m/s
Variação de temperatura do aço durante a frenagem: de 20 °C para 120 °C.

Considerando que toda a energia cinética do carro é convertida em calor e absorvida pelo aço, qual das alternativas apresenta, respectivamente, o valor correto da energia cinética inicial do carro (em Joules) e a massa de aço necessária (em kg)?`,["Energia Cinética: 150.000 J; Massa de Aço: 3,26 kg","Energia Cinética: 300.000 J; Massa de Aço: 6,52 kg","Energia Cinética: 300.000 J; Massa de Aço: 13,04 kg","Energia Cinética: 600.000 J; Massa de Aço: 3,26 kg","Energia Cinética: 600.000 J; Massa de Aço: 6,52 kg"],"B",`E = 1500 · 20²/2 = 300.000 J. 300.000 = m · 460 · 100 → m ≈ 6,52 kg. Esquecer o ½ leva a 600.000 J.`);

Q(3,7,"Química","Forças intermoleculares: gelo seco",2,`No buffet de dona Márcia, em Sobral, a fonte de bebidas envolta em névoa branca usa blocos de gelo seco, que diminuem ao longo da noite sem deixar poça alguma no chão.

O dióxido de carbono (CO₂) é comumente utilizado em sua forma sólida, conhecida como gelo seco, devido à sua capacidade de sublimar (passar diretamente do estado sólido para o gasoso) em condições ambientes. Esse processo, assim como a decomposição do gelo seco, envolve a ruptura de ligações químicas.

Considerando a estrutura molecular do dióxido de carbono e os tipos de interação existentes entre suas moléculas, qual tipo de ligação é rompida durante a sublimação ou a decomposição do gelo seco?`,["Ligações iônicas, pois o CO₂ se dissocia em átomos de carbono e oxigênio.","Ligações covalentes, pois as moléculas de CO₂ se separam para formar átomos livres.","Ligações metálicas, devido à formação de uma rede de átomos de carbono.","Ligações intermoleculares, como forças de Van der Waals, entre as moléculas de CO₂.","Ligações de hidrogênio, que são responsáveis pela formação das moléculas de CO₂."],"D",`Na sublimação as moléculas ficam intactas; rompem-se as interações entre elas. O CO₂ é apolar: dispersão de London (família Van der Waals).`);

Q(3,8,"Linguagens","Variação linguística: estrangeirismos",1,`Rodando o Brasil para um guia de pizzarias, a jornalista Beatriz notou três casas vizinhas na Mooca anunciando o mesmo queijo, cada uma com uma forma diferente de escrevê-lo.

No Brasil, o queijo de origem italiana, originalmente chamado "mozzarella", apresenta diferentes grafias em português, como "muçarela", "mussarela" e "mozarela". Essa variação ortográfica demonstra como a língua se adapta e evolui ao incorporar termos estrangeiros.

Qual é o principal fator que explica a ocorrência dessas diferentes formas de escrever a palavra "mozzarella" no português brasileiro?`,["A adaptação da pronúncia e da escrita do termo italiano à fonética e às regras ortográficas do português.","A influência da língua espanhola, que também utiliza termos italianos, na forma como o termo é escrito no Brasil.","A diversidade de tipos de queijo mozzarella, cada um com uma grafia específica.","A ausência de uma legislação específica que determine a grafia correta do termo.","A variação na pronúncia do termo nas diferentes regiões do Brasil, refletida na escrita."],"A",`Aportuguesamento: o estrangeirismo se acomoda à fonética e à ortografia do português — o "zz" vira "ç", "ss" ou "z".`);

Q(3,9,"Biologia","Bioquímica: enzimas e pH",2,`Na lanchonete de dona Zélia, em Fortaleza, a salada de frutas é preparada de madrugada — e no meio da manhã maçãs e bananas já perderam a cor viva.

Maçãs e bananas, assim como muitas outras frutas, sofrem um processo de escurecimento quando expostas ao ar. Esse fenômeno é resultado da ação de enzimas que catalisam reações químicas específicas, e sua atividade é otimizada em um ambiente com pH próximo da neutralidade.

Com o objetivo de retardar ou diminuir o escurecimento de frutas, qual substância poderia ser adicionada para interferir na ação dessas enzimas?`,["Suco de limão, pois sua acidez pode inibir a atividade enzimática.","Mel de abelha, porque ele possui propriedades antioxidantes que protegem a fruta.","Sal, pois cria um ambiente favorável para a atividade enzimática.","Água, já que ajuda a diluir os compostos que causam o escurecimento."],"A",`As enzimas trabalham melhor em pH neutro; o limão acidifica e reduz sua atividade. O sal é descrito como favorável à enzima; a água só dilui; o mel não decorre do mecanismo dado.`);

Q(3,10,"Matemática","Grandezas e unidades: taxa de transferência",1,`Encarregado de migrar o acervo digital de uma escola pública de Caucaia para o servidor novo, o técnico Rodrigo explicou ao estagiário o significado da sigla que aparecia no painel da cópia.

Em uma transferência de dados, um arquivo com 5 Gigabytes (GB) será transmitido a uma taxa de 456 Megabytes por segundo (MB/s). Ao analisar essa informação, surge a dúvida sobre o significado da unidade "MB/s".

Considerando que a unidade "MB/s" expressa a quantidade de dados que são transferidos em um determinado intervalo de tempo, qual das alternativas a seguir descreve melhor a classificação para "MB/s"?`,["Velocidade por segundo","Distância por segundo","Taxa de transferência de dados","Volume por segundo","Fluxo de informações por segundo"],"C",`MB/s relaciona quantidade de dados e tempo: taxa de transferência de dados. "Velocidade/distância por segundo" vêm da cinemática; "fluxo por segundo" é redundante.`);

Q(3,11,"Matemática","Porcentagem: conversão de taxas",1,`Em Crateús, a enfermeira Auxiliadora prepara o boletim da Secretaria de Saúde e decide converter um indicador internacional para a linguagem de porcentagem.

Em um relatório global sobre saúde, foi identificado que a taxa de mortalidade infantil de um país é de 15,6 óbitos a cada 1.000 nascidos vivos.

Considerando essa taxa, qual é o valor correspondente expresso em porcentagem?`,["0,0156%","1,56%","15,6%","1,56‰","0,156%"],"B",`15,6 por 1.000 = 1,56 por 100 = 1,56%. 15,6% infla dez vezes; 1,56‰ troca a unidade.`);

Q(3,12,"Matemática","Geometria plana: perímetro e conversão",3,`Depois de anos sedentário, o servidor Marcos, de Sobral, aceitou completar sua primeira prova de rua; o treinador montou a planilha no campo de futebol ao lado de casa.

Um corredor amador decide percorrer voltas em um campo de futebol. As regras da FIFA estabelecem que as dimensões de um campo variam, com um comprimento mínimo de 90 metros e máximo de 120 metros, e uma largura mínima de 45 metros e máxima de 90 metros. O corredor planeja correr ao redor do campo 12 vezes, utilizando as dimensões mínimas permitidas.

Qual a distância mínima, em quilômetros, que esse corredor percorrerá ao completar as 12 voltas no campo?`,["1,8 km","2,7 km","3,24 km","4,5 km","5,4 km"],"C",`Perímetro mínimo: 2 · (90 + 45) = 270 m. 12 voltas: 3.240 m = 3,24 km.`);

Q(3,13,"Matemática","Leitura de tabela: comparação de custos",1,`No estande de uma administradora de consórcios em Horizonte (CE), o atendente Genário propôs fazer as duas contas diante do casal, já que a ordem dos nomes no contrato muda o valor.

Um casal, composto por Cláudia, de 23 anos, e Nelson, de 35 anos, está interessado em contratar um plano de consórcio. A tabela estabelece que:
• Mulher (18 a 25 anos) paga R$ 300,00
• Mulher (26 a 35 anos) paga R$ 350,00
• Homem (18 a 25 anos) paga R$ 400,00
• Homem (26 a 35 anos) paga R$ 450,00
Além disso, o segundo nome tem um acréscimo no valor:
• Mulher como segundo nome: + R$ 200,00
• Homem como segundo nome: + R$ 100,00

Eles querem comparar: 1. Cláudia como primeiro nome e Nelson como segundo; 2. Nelson como primeiro nome e Cláudia como segundo. Qual configuração gera a diferença de preço indicada?`,["Quando Cláudia for o primeiro nome e Nelson o segundo, a diferença será de R$ 200,00 a mais.","Quando Cláudia for o primeiro nome e Nelson o segundo, a diferença será de R$ 100,00 a mais.","Quando Nelson for o primeiro nome e Cláudia o segundo, a diferença será de R$ 200,00 a mais.","Quando Nelson for o primeiro nome e Cláudia o segundo, a diferença será de R$ 100,00 a mais.","Não há diferença entre as duas configurações."],"D",`Config. 1: 300 + (450 + 100) = R$ 850,00. Config. 2: 450 + (300 + 200) = R$ 950,00. Com Nelson primeiro, paga-se R$ 100,00 a mais.`);

Q(3,14,"Química","Estequiometria com rendimento",3,`No polo industrial de Camaçari, a engenheira Talita acompanha a corrida de validação de uma unidade: alimenta-se uma quantidade conhecida do insumo e confere-se se a produção real bate com a prevista.

Em um processo industrial, a amônia (NH₃) é utilizada em duas reações consecutivas para produzir carbonato de sódio (Na₂CO₃). A segunda reação, já balanceada, apresenta o Na₂CO₃ com coeficiente estequiométrico 2 como reagente. Para estabelecer a relação correta entre a amônia e o carbonato de sódio na reação global, a equação da primeira reação deve ser multiplicada por 2.
Dados: massa molar da amônia (NH₃) = 17 g/mol; massa de amônia utilizada = 340 g; rendimento da reação = 90%.

Qual a massa de carbonato de sódio (Na₂CO₃) formada ao final do processo?`,["900 g","954 g","1020 g","1060 g","1100 g"],"B",`340/17 = 20 mol de NH₃ → proporção 2:1 → 10 mol de Na₂CO₃ (1.060 g teóricos). Com 90%: 954 g.`);

Q(3,15,"Matemática","MMC: colunas de moedas",1,`Para o arraial beneficente de junho, a ONG Mãos do Bem, no Recife, quer duas colunas de moedas exatamente da mesma altura na vitrine, gastando o mínimo possível.

Uma coluna é feita com moedas de 1 real e outra com moedas de 50 centavos. As moedas de 1 real têm uma espessura de 2,85 mm, enquanto as de 50 centavos possuem uma espessura de 1,95 mm. A organização quer saber qual o menor valor total de doações, em reais, que fará com que as duas colunas atinjam a mesma altura.

Qual o valor total mínimo que a organização precisará arrecadar?`,["R$ 20,00","R$ 22,50","R$ 25,00","R$ 30,00","R$ 35,00"],"B",`Em centésimos de mm: 285 = 3·5·19 e 195 = 3·5·13 → MMC = 3.705 → 37,05 mm.

37,05/2,85 = 13 moedas de R$ 1 (R$ 13,00); 37,05/1,95 = 19 de R$ 0,50 (R$ 9,50). Total: R$ 22,50.`);

Q(3,16,"Matemática","Porcentagem: horas extras",1,`Maria é operadora de caixa em Maracanaú (CE) e quer negociar uma carga maior de trabalho remunerado além do expediente, chegando antes ao número exato de que precisaria.

Maria trabalha em uma empresa que paga hora extra com um acréscimo de 50% sobre o valor da hora normal. Em uma semana, ela trabalha 40 horas regulares e 10 horas extras, recebendo um total de R$ 400,00. Ela precisa aumentar sua renda mensal, e seu objetivo é receber R$ 792,00 por mês.

Considerando que o mês tem 4 semanas, quantas horas extras adicionais Maria precisa fazer por mês para atingir sua meta?`,["10 horas extras adicionais","15 horas extras adicionais","130 horas extras adicionais","100 horas extras adicionais","30 horas extras adicionais"],"C",`Atenção: os dados não fecham numa única leitura (4 × 400 = 1.600 já supera 792). A leitura que leva a uma alternativa trata R$ 792 como meta semanal e a hora normal como 400/50 = R$ 8 (hora extra R$ 12).

Faltam 392 por semana → 392/12 ≈ 32,7 h/semana → cerca de 130 h no mês. (Questão com enunciado inconsistente, segundo o próprio comentário.)`);

Q(3,17,"Geografia","Espaço urbano: enchentes e impermeabilização",1,`Jandira mora há vinte anos na zona leste da capital paulista e mede as chuvas de verão pela marca que a água deixa na parede da sala. "Chove forte no mundo todo, mas por que aqui vira tragédia todo ano?", desabafou na reunião da associação de moradores.

As enchentes representam um problema persistente na cidade de São Paulo, impactando diversas áreas durante a temporada de chuvas.

Considerando os fatores ambientais e urbanísticos, qual das alternativas a seguir é apontada como a principal causa do aumento e da gravidade das enchentes na cidade?`,["A criação de espaços verdes e parques, incluindo a construção de lagos artificiais, que visam a absorção de água.","A impermeabilização do solo, consequência do crescimento urbano desordenado, que dificulta a infiltração da água.","A presença de áreas de reflorestamento nas margens dos rios, contribuindo para a contenção e absorção da água.","O aumento da vegetação nas planícies de inundação, auxiliando na drenagem natural e na redução do volume de água.","A construção de diques e barreiras de contenção ao longo dos rios, que visam conter o volume de água e evitar o transbordamento."],"B",`Asfalto, concreto e ocupação de várzeas impedem a infiltração: a água escoa em volume e velocidade, sobrecarregando rios e galerias. As demais descrevem fatores que atenuam.`);

Q(3,18,"Química","Chuva ácida: biodiesel e enxofre",1,`A cooperativa de transporte do distrito industrial de Sobral pôs em votação a troca para um combustível de origem vegetal; uma professora de química explicou o elo entre o escapamento e a chuva que corrói telhados.

A utilização de combustíveis fósseis, como o óleo diesel, é uma das principais fontes de emissão de gases poluentes na atmosfera, incluindo óxidos de enxofre e nitrogênio, que são os principais componentes da chuva ácida. Em contrapartida, o biodiesel surge como uma alternativa mais sustentável.

Qual das afirmações a seguir justifica a menor contribuição do biodiesel para a formação da chuva ácida, em comparação com o óleo diesel?`,["O biodiesel é derivado de fontes renováveis, o que resulta na redução da emissão de gases poluentes.","A combustão do biodiesel produz uma quantidade significativamente menor de enxofre (aproximadamente 98% a menos), o principal agente causador da chuva ácida e de problemas respiratórios.","O biodiesel apresenta um teor de enxofre superior, o que intensifica a formação de chuva ácida.","A produção de biodiesel não libera gases poluentes, eliminando a formação de chuva ácida.","O biodiesel contém compostos de enxofre que atuam na neutralização da acidez da chuva."],"B",`Cadeia: S → SO₂ → H₂SO₄. O biodiesel é praticamente isento de enxofre. "Renovável" fala do carbono, não do enxofre.`);

Q(3,19,"Matemática","Geometria plana: aproximação da área do círculo",3,`No laboratório de modelagem de uma universidade de Campina Grande, a bolsista Rafaela avalia um procedimento antigo que dispensa o número π, substituindo uma figura curva por outra de lados retos.

Uma equipe propôs estimar a área de um círculo utilizando a área de um quadrado cujo lado é (16/9) · R, onde R é o raio do círculo. Para avaliar a precisão do método, os pesquisadores compararam a estimativa (A/B, valores resultantes do método) com π (aproximadamente 3,14), pela diferença absoluta. Critérios:
Satisfatório: diferença absoluta menor que 0,5.
Insatisfatório: diferença absoluta maior ou igual a 0,5.

Com base nesses critérios, qual das seguintes afirmações melhor descreve a avaliação do método proposto?`,["O método é classificado como satisfatório, pois a diferença absoluta entre a área estimada e π é de 0,0205.","O método é classificado como insatisfatório, pois a diferença absoluta entre a área estimada e π é de 1,2.","O método é classificado como insatisfatório, pois a diferença absoluta entre a área estimada e π é de 0,6.","O método é classificado como satisfatório, pois a diferença absoluta entre a área estimada e π é de 0,3.","O método é classificado como insatisfatório, pois a diferença absoluta entre a área estimada e π é de 0,7."],"A",`Área do quadrado: (16/9)²R² = (256/81)R² ≈ 3,1605·R². |3,1605 − 3,14| = 0,0205 < 0,5 → satisfatório.`);

Q(3,20,"Matemática","Geometria plana: área do triângulo equilátero",3,`Na marcenaria de seu Antônio, em Juazeiro do Norte, o aprendiz Válber errava ao estimar o material quando o cliente pedia o tampo triangular "um pouco maior". "Antes de cortar, aprenda como a superfície da peça responde quando o lado dela muda."

Considere um triângulo equilátero, ou seja, um triângulo com todos os lados de mesma medida.

Qual das alternativas abaixo expressa corretamente a relação entre a área (A) desse triângulo e o comprimento de seu lado (l)?`,["A é diretamente proporcional ao quadrado de l.","A é inversamente proporcional ao quadrado de l.","A é diretamente proporcional à raiz quadrada de l.","A é inversamente proporcional à raiz quadrada de l.","A é diretamente proporcional a l."],"A",`A = (√3/4) · l²: dobrar o lado quadruplica a área.`);

Q(3,21,"Matemática","Equação do 2º grau: parcelamentos",2,`Na loja de móveis planejados onde trabalha, em Fortaleza, o vendedor Ribamar apresentou a dona Ivone dois planos de pagamento idênticos no total e diferentes no valor mensal.

Uma empresa oferece duas opções de parcelamento para um valor de R$ 60.000,00.
Opção 1: O valor é dividido em N parcelas mensais iguais.
Opção 2: O valor é dividido em N + 6 parcelas mensais, com cada parcela R$ 500,00 mais barata que as parcelas da Opção 1.

Sabendo que o valor total a ser pago é o mesmo em ambas as opções, qual o número de parcelas (N) estabelecido na Opção 1?`,["12 parcelas","18 parcelas","24 parcelas","30 parcelas","36 parcelas"],"C",`60.000/N − 60.000/(N + 6) = 500 → N² + 6N − 720 = 0 → N = 24. O 30 captura quem responde N + 6.`);

Q(3,22,"Linguagens","Literatura: linguagem literária em Os Sertões",2,`O clube de leitura da biblioteca pública de Tauá dedicou o semestre aos autores que escreveram sobre o interior do Brasil. "Reparem no modo de dizer, não só no que é dito", orientou a mediadora.

No livro "Os Sertões", de Euclides da Cunha, encontramos o seguinte trecho descritivo sobre a caatinga: "A caatinga estende sobre a terra as ramagens de espinhos, e, como um cilício dilacerador, a caatinga estende sobre a terra as ramagens de espinhos."
CUNHA, E. Os Sertões, 1902 (fragmento citado conforme o material de origem).

Com base na linguagem utilizada e no estilo de escrita, qual o tipo de linguagem predominante nesse trecho?`,["Linguagem literária","Linguagem coloquial","Linguagem científica","Linguagem técnica","Linguagem jornalística"],"A",`Comparação ("como um cilício dilacerador"), personificação da caatinga, vocabulário expressivo e repetição rítmica: linguagem literária.`);

Q(3,23,"História","EUA e América: Doutrina Monroe",2,`O professor Adriano, de Sobral, organizou uma simulação diplomática do século XIX; à equipe de Larissa coube a jovem república que observava com desconfiança as monarquias do outro lado do Atlântico.

Em 1823, o presidente dos Estados Unidos, James Monroe, estabeleceu uma política externa que ficou conhecida como Doutrina Monroe. Essa doutrina definiu os princípios para as relações entre os países americanos e as potências europeias.

Qual das opções a seguir representa o objetivo principal dessa doutrina?`,["Estimular a intervenção europeia nos assuntos internos das nações americanas.","Garantir a independência das colônias europeias na América.","Evitar a formação de novas colônias europeias nas Américas e a interferência europeia nos assuntos internos dos países americanos.","Apoiar a colonização europeia na América do Norte.","Criar uma aliança militar entre os países americanos e as potências europeias."],"C",`"A América para os americanos": vetar novas colonizações europeias e interferências. A doutrina não prometia libertar colônias existentes (B).`);

Q(3,24,"Biologia","Zoologia: toxicidade de anfíbios e dieta",2,`No biotério de uma universidade cearense, a bióloga Carla notou diferença de toxicidade entre sapos recolhidos na natureza e sapos criados em laboratório, e suspeitou que a explicação estava na rotina do biotério, não nos genes.

Em algumas espécies de sapos, a toxicidade da pele é influenciada pela dieta. No ambiente natural, esses sapos se alimentam de insetos que contêm substâncias químicas que, ao serem ingeridas, são acumuladas e secretadas na pele, tornando-a tóxica. Quando esses sapos são criados em cativeiro e recebem uma dieta diferente, como moscas comuns, a toxicidade da pele não se desenvolve da mesma forma.

Qual é a principal explicação para essa variação na toxicidade entre sapos em ambiente natural e em cativeiro?`,["A dieta em cativeiro não possui os componentes químicos essenciais para a formação de toxinas.","A dieta em cativeiro estimula a produção de toxinas na pele do sapo.","A dieta em cativeiro diminui a produção de toxinas na pele do sapo.","A dieta em cativeiro não interfere na produção de toxinas na pele do sapo.","A dieta em cativeiro modifica a coloração da pele do sapo, aumentando sua toxicidade."],"A",`A toxina vem dos insetos da dieta (sequestro de compostos). Sem esses precursores, a pele não fica tóxica. "Diminui a produção" (C) sugere síntese própria, que o texto nega.`);

Q(3,25,"Biologia","Genética: herança epigenética",3,`Em um centro de pesquisa do interior paulista, a geneticista Flávia estuda famílias que passaram por privação alimentar severa há duas gerações: certos padrões de saúde se repetem nos netos, sem mutação que os explique.

A epigenética estuda as modificações na expressão gênica que não envolvem alterações na sequência do DNA. Essas modificações podem ser influenciadas por fatores ambientais e, em alguns casos, transmitidas de pais para filhos.

Qual das alternativas abaixo melhor explica por que alterações epigenéticas nos pais podem ser herdadas pelos filhos?`,["As modificações epigenéticas alteram diretamente a sequência do DNA, tornando-as hereditárias.","As alterações epigenéticas afetam apenas os genes dos pais, não sendo transmitidas aos filhos.","As modificações epigenéticas podem ser transmitidas aos filhos por meio de células germinativas, influenciando a expressão gênica sem alterar a sequência do DNA.","As alterações epigenéticas são permanentes e não podem ser transmitidas para as gerações seguintes.","As modificações epigenéticas não têm impacto na expressão gênica e, portanto, não são herdadas."],"C",`Marcas como a metilação presentes nos gametas podem escapar da reprogramação e chegar à prole, modulando a expressão sem alterar a sequência.`);
