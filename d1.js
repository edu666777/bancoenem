Q(1,1,"Matemática","Geometria plana: área do círculo",3,`Uma empresa de engenharia elétrica está projetando a instalação de um conjunto de fios condutores em um edifício comercial de dezoito andares, na cidade de Belo Horizonte. Todo o cabeamento passará por eletrodutos verticais, tubos de seção transversal circular embutidos em prumadas técnicas — pequenas colunas ocas que atravessam a construção do primeiro ao último pavimento.

Cada fio possui seção transversal de área igual a 15 mm², e o projeto prevê a passagem de oito fios por tubo, todos idênticos. A NBR 5410, norma brasileira que regula instalações elétricas de baixa tensão, determina que os fios não devem ocupar mais do que 40% da área total da seção do tubo, exigência ligada à segurança elétrica: sobras de espaço permitem a dissipação do calor gerado pela passagem de corrente e evitam que a isolação dos cabos se degrade por aquecimento excessivo. Um eletroduto lotado, diz o engenheiro responsável pela obra, "é uma bomba silenciosa embutida na parede".

Com base nesses dados, deseja-se determinar o diâmetro mínimo da seção circular do tubo que atende à norma.

Considerando π = 3, o diâmetro mínimo da seção transversal do tubo, em milímetros, é`,["10.","15.","18.","20.","40."],"D",`A área total ocupada pelos fios é 8 × 15 mm² = 120 mm². Como essa área representa, no limite da norma, 40% da seção do tubo: 0,4 · A(tubo) = 120 → A(tubo) = 300 mm².

Com A = π·r² e π = 3: 300 = 3·r² → r² = 100 → r = 10 mm. O diâmetro é d = 2r = 20 mm.

Armadilhas: (i) a norma limita a área ocupada, não o número de fios; (ii) a pergunta é sobre o diâmetro, não o raio — quem para em 10 mm cai em A.`,"Corte transversal do eletroduto: oito fios de cobre dentro do tubo circular, com o diâmetro d = ? indicado.");

Q(1,2,"Matemática","Função quadrática e coeficiente angular",2,`Uma equipe de engenharia responsável pela ampliação de uma rodovia federal, no interior de Minas Gerais, projetou o perfil de um novo túnel com base no gráfico de uma parábola que descreve a curvatura ideal da estrutura. A escolha da parábola não é arbitrária: entre as curvas planas, ela distribui esforços de maneira previsível e permite o cálculo direto de altura, largura e inclinação a partir de uma única equação. O engenheiro-chefe, ao apresentar a proposta em audiência pública, resumiu: "o túnel é a equação; a equação é o túnel".

O perfil projetado descreve a função f(x) = −⅛·x² + 2x, em que x representa a coordenada horizontal, medida em metros a partir da base esquerda da estrutura, e f(x) representa a altura da parede do túnel, também em metros. A abertura do túnel encontra-se sobre o eixo horizontal (o solo), e o ponto mais alto corresponde ao vértice da parábola.

Um dos técnicos precisa calcular a inclinação da reta que liga o ponto mais alto da parábola ao ponto onde ela volta a tocar o solo à direita. O coeficiente angular dessa reta é`,["−16.","−1.","1.","10.","8."],"B",`Vértice: xv = −b/(2a) = −2/(−1/4) = 8; f(8) = −8 + 16 = 8 → V = (8, 8).

Raízes: −(1/8)x² + 2x = 0 → x(x − 16) = 0 → x = 0 ou x = 16. À direita, o túnel termina em (16, 0).

m = (0 − 8)/(16 − 8) = −1. O sinal negativo era esperado: a reta desce do topo à extremidade direita.`,"Parábola com raízes em (0;0) e (16;0) e vértice V(8;8); reta tracejada ligando V a (16;0).");

Q(1,3,"Matemática","Inequações: modelagem de restrições",2,`Numa rua tranquila do bairro Bela Vista, em São Paulo, dona Rosa prepara massa fresca todos os dias, na madrugada, para a rotisseria que sustenta a família há vinte e dois anos. Aos sábados, o volume dobra: encomendas de casamento, aniversários da vizinhança, marmitas para o hospital ali perto. A produção do dia se organiza em dois tipos de massa, sempre os mesmos: ravióli recheado com ricota e espinafre, e talharim ao ovo, laminado à mão. Cada porção de ravióli pesa 0,25 kg e leva 0,3 hora para ser cozida no ponto certo, enquanto cada porção de talharim pesa 0,3 kg e é cozida em 0,2 hora — o talharim precisa de menos água fervendo, mas ocupa mais espaço na balança.

Neste sábado, dona Rosa dispõe de até 12 kg de massa fresca já preparada desde a véspera e, no máximo, 8 horas úteis de cozimento — depois desse limite, o fogão precisa ser desligado para manutenção do botijão. Chamando r o número de porções de ravióli e t o número de porções de talharim, ela precisa saber quais combinações são possíveis dentro dessas restrições.

O sistema de inequações que modela corretamente essa situação é`,["0,25r + 0,3t ≤ 12 e 0,3r + 0,2t ≤ 8.","0,25r + 0,3t ≥ 12 e 0,3r + 0,2t ≤ 8.","0,3r + 0,25t ≤ 12 e 0,2r + 0,3t ≤ 8.","0,3r + 0,2t ≤ 12 e 0,25r + 0,3t ≤ 8.","0,3r + 0,25t ≥ 12 e 0,3r + 0,2t ≤ 8."],"A",`Massa: 0,25 kg por ravióli e 0,3 kg por talharim, total até 12 kg → 0,25r + 0,3t ≤ 12.

Tempo: 0,3 h por ravióli e 0,2 h por talharim, total até 8 h → 0,3r + 0,2t ≤ 8.

Quem inverte os coeficientes cai em C ou D; o sinal é sempre ≤ porque são limites de recurso disponível (descarta B e E).`);

Q(1,4,"Matemática","Geometria espacial: volume da semiesfera e gráficos",2,`Durante uma atividade doméstica de fim de tarde, uma moradora percebeu que a válvula de escoamento da cuba metálica do banheiro estava parcialmente obstruída — a água descia, mas devagar. A parte interna da cuba tem formato aproximado de uma semiesfera de raio 10 cm, geometria comum em peças de louça e metal por facilitar a limpeza e não acumular resíduo nos cantos. Com a cuba inicialmente cheia até a borda, a água levou exatamente 1 hora para escoar por completo.

Um sensor acoplado à instalação registrou, ao longo de todo o processo, a altura da lâmina de água medida em relação ao fundo da cuba. Para efeito do modelo matemático, considere que a vazão volumétrica de saída permaneceu constante durante todo o esvaziamento: a mesma quantidade de centímetros cúbicos deixou a cuba a cada instante, do início ao fim. O gráfico a seguir apresenta cinco comportamentos possíveis para a altura h em função do tempo t.

Com base na geometria da cuba e na relação entre volume e altura, o comportamento que representa corretamente o esvaziamento é o`,["Comportamento 1.","Comportamento 2.","Comportamento 3.","Comportamento 4.","Comportamento 5."],"B",`A vazão constante é de volume, não de altura. Com a cuba cheia, a superfície livre é máxima (π·10² ≈ 314 cm²) e a altura cai devagar; perto do fundo a seção é minúscula e a lâmina despenca. A curva é côncava para baixo, acima da reta — elimina o 3 (reta, recipiente cilíndrico) e os 4 e 5 (côncavos para cima).

Entre 1 e 2: V = π·h²·(3R − h)/3. Na metade do tempo resta metade do volume: h²·(30 − h) = 1.000 → h ≈ 6,5 cm. É o Comportamento 2 que passa por esse ponto; o 1 passa perto de 7,8 cm.`,"À esquerda, cuba semiesférica de raio 10 cm em corte. À direita, cinco curvas h(t) de (0;10) a (1;0), numeradas de 1 a 5; a curva 2 é côncava para baixo e passa por h ≈ 6,5 cm em t = 0,5 h.");

Q(1,5,"Matemática","Razão e proporção: velocidade e tempo",1,`No verão europeu de 2009, na semifinal do Campeonato Mundial de Atletismo em Berlim, o jamaicano Usain Bolt cruzou a linha de chegada dos cem metros rasos em 9,58 segundos — a menor duração que um ser humano já registrou oficialmente para esta distância. Câmeras de alta velocidade instaladas ao longo da pista permitiram calcular sua velocidade instantânea metro a metro; entre os sessenta e os oitenta metros da prova, Bolt atingiu uma velocidade máxima próxima de 44,72 km/h.

Ainda assim, estudos biomecânicos recentes sugerem que o corpo humano, no limite teórico de suas alavancas musculares e articulares, poderia chegar a uma velocidade máxima estimada em 64,4 km/h — cerca de quarenta por cento acima do recorde de Bolt.

Suponha, para fins comparativos, que um corredor hipotético mantivesse essa velocidade máxima teórica de 64,4 km/h e percorresse uma determinada distância em 2 segundos. Deseja-se saber quanto tempo a mais Usain Bolt, correndo à sua velocidade máxima de 44,72 km/h, levaria para percorrer a mesma distância.

O tempo adicional necessário para Bolt, em segundos, aproximadamente, é`,["0,3.","0,5.","0,9.","1,2.","2,0."],"C",`64,4 km/h ÷ 3,6 ≈ 17,89 m/s; 44,72 km/h ÷ 3,6 ≈ 12,42 m/s.

Em 2 s o corredor teórico percorre ≈ 35,78 m. Bolt leva 35,78/12,42 ≈ 2,88 s. Tempo adicional ≈ 0,88 s ≈ 0,9 s.

Atalho: para distância fixa, tempo e velocidade são inversamente proporcionais: t = 2 · 64,4/44,72 ≈ 2,88 s.`);

Q(1,6,"Matemática","Progressão aritmética",2,`Marcelo, atleta amador de vinte e dois anos que trabalha durante o dia numa oficina mecânica na Zona Leste do Rio de Janeiro, decidiu se preparar para a Meia Maratona da Cidade Maravilhosa, marcada para o primeiro fim de semana de outubro. Setembro seria seu mês decisivo. Para não repetir o erro de outros anos — treinos intensos demais no início, lesão e desistência no meio do caminho — ele adotou uma progressão simples e disciplinada, aumentando o tempo de treino em pequenas doses regulares.

Um caderno pautado marca a rotina, dia a dia. Nele, apenas alguns registros de referência aparecem em destaque, feitos com caneta vermelha:
Dia 5 · 1,5 horas
Dia 10 · 3,0 horas
Dia 15 · 4,5 horas
Dia 20 · 6,0 horas

A partir do padrão observado nos registros, percebe-se que o tempo de treino segue uma progressão regular: a cada cinco dias, uma hora e meia é acrescentada ao total diário. Marcelo planeja manter esse ritmo até o dia trinta, encerrando setembro com a maior carga do mês.

Mantida essa progressão, o tempo de treino do atleta no dia trinta de setembro será, em horas, de`,["7,5.","8,0.","8,5.","9,0.","9,5."],"D",`Os registros formam uma PA de razão 1,5 nos dias 5, 10, 15, 20, 25, 30. O dia 30 é o 6º termo: a₆ = 1,5 + 5·1,5 = 9,0 horas.

Atalho: do dia 5 ao dia 30 há cinco intervalos de 5 dias → 5 · 1,5 = 7,5 h de acréscimo sobre 1,5 h.`);

Q(1,7,"Matemática","Porcentagem: fatores multiplicativos",1,`Um gerente de marketing de uma pequena marca de cosméticos artesanais em Recife apresentou, na reunião mensal da equipe, os números da campanha realizada em fevereiro nas redes sociais. Para decidir se a campanha seria repetida, a agência contratada aplica um método interno chamado índice global de desempenho, no qual dois indicadores — visibilidade da marca e volume de vendas — são multiplicados entre si, e o resultado é comparado a uma tabela de faixas.

Os dados apurados foram os seguintes: a visibilidade da marca aumentou 30%, o que corresponde a um fator de 1,3; já as vendas caíram 10%, ou seja, o fator equivalente é 0,9.

A tabela de avaliação utilizada pela agência é a seguinte:
Menor que 0% — Muito insatisfeito
De 0% a 5% — Insatisfeito
De 5% a 15% — Regular
De 15% a 20% — Satisfeito
Maior que 20% — Muito satisfeito

Com base nesses dados, a avaliação atribuída ao desempenho da campanha é`,["Muito insatisfeito.","Insatisfeito.","Regular.","Satisfeito.","Muito satisfeito."],"D",`1,3 · 0,9 = 1,17, ou seja, crescimento de 17% em relação à referência (1,00). 17% está entre 15% e 20% → Satisfeito.

Armadilhas: achar que a queda de vendas domina (A ou B) ou ler 1,17 como 117% (E).`);

Q(1,8,"Matemática","Razão e proporção: vazão de torneiras",1,`Numa casa de fazenda no interior de Goiás, o reservatório de água que abastece a pia da cozinha e o tanque de louça é enchido por duas torneiras independentes, ligadas ao mesmo poço artesiano por tubulações diferentes. A torneira 1, mais larga, funcionando sozinha, leva 24 minutos para encher completamente o recipiente de duzentos litros. A torneira 2, instalada em obra recente, tem vazão menor, e sozinha leva 36 minutos para realizar o mesmo trabalho.

Numa manhã de sábado, Dona Antonieta abriu apenas a torneira 1 e a deixou funcionando por doze minutos, enquanto preparava o café e organizava as compras da feira. Em seguida, fechou a torneira 1 e abriu apenas a torneira 2 para completar o enchimento, distraindo-se com a chegada dos netos.

Considerando essa sequência de aberturas, a alternativa correta é`,["Nos 12 primeiros minutos, foi preenchido 1/3 do reservatório, e o restante é preenchido pela torneira 2 em 24 minutos.","Nos 12 primeiros minutos, foi preenchido 1/2 do reservatório, e o restante é preenchido pela torneira 2 em 18 minutos.","Nos 12 primeiros minutos, foi preenchido 1/4 do reservatório, e o restante é preenchido pela torneira 2 em 27 minutos.","Nos 12 primeiros minutos, foi preenchido 1/2 do reservatório, e o restante é preenchido pela torneira 2 em 12 minutos.","Nos 12 primeiros minutos, foi preenchido 1/3 do reservatório, e o restante é preenchido pela torneira 2 em 18 minutos."],"B",`Torneira 1 por 12 min: 12/24 = 1/2 do reservatório (descarta A, C, E).

Torneira 2 enche 1/36 por minuto: (1/2)/(1/36) = 18 minutos (descarta D). Total do processo: 30 minutos.`);

Q(1,9,"Matemática","Geometria plana: áreas e folgas",3,`Rogério comprou, num sábado de outono, um apartamento antigo no centro de Porto Alegre. Entre as tarefas da reforma, a mais delicada é encaixar num dos vãos da parede o armário de madeira maciça que herdou do avô — peça de setenta e cinco centímetros de largura por sessenta centímetros de profundidade. O manual entregue com a peça restaurada recomenda expressamente manter uma folga de dez centímetros de cada lado em relação às paredes laterais e mais dez centímetros ao fundo, para evitar que a umidade da parede empene a madeira ao longo do inverno.

Três vãos da sala estão disponíveis para receber o móvel:
Vão 1 · 105 cm de largura e 75 cm de profundidade.
Vão 2 · 95 cm de largura e 80 cm de profundidade.
Vão 3 · 100 cm de largura e 70 cm de profundidade.

Como o apartamento é pequeno, a intenção do proprietário é escolher, entre os vãos que atendem à recomendação técnica de folga, aquele que apresenta a menor área de base — de modo a preservar o máximo possível de espaço livre ao redor.

A escolha que atende simultaneamente à recomendação técnica e ao critério de menor área ocupada é`,["1, pois sua área é aproximadamente 7.900 cm².","2, pois sua área é aproximadamente 7.200 cm².","3, pois sua área é aproximadamente 7.000 cm².","1, pois sua área é aproximadamente 7.500 cm².","2, pois sua área é aproximadamente 8.000 cm²."],"C",`Mínimo exigido: largura 75 + 10 + 10 = 95 cm; profundidade 60 + 10 = 70 cm. Os três vãos atendem.

Áreas: vão 1 → 105·75 = 7.875 cm²; vão 2 → 95·80 = 7.600 cm²; vão 3 → 100·70 = 7.000 cm². O menor é o vão 3.`);

Q(1,10,"Química","Química orgânica: ozonólise de alcenos",2,`A ozonólise é uma reação clássica da química orgânica, cuja principal utilidade laboratorial é a de diagnóstico estrutural: descobrir onde, exatamente, se localiza a dupla ligação de um alceno desconhecido. O procedimento consiste em fazer o alceno reagir com ozônio, formando um intermediário cíclico chamado ozonídeo. Esse intermediário é depois hidrolisado, e a análise dos produtos finais permite reconstruir, por dedução, qual era a estrutura original.

Se a hidrólise é feita em condições redutoras — na presença de zinco em ácido acético ou de sulfureto de dimetila —, os produtos resultantes são compostos carbonílicos: aldeídos, cetonas ou uma combinação de ambos, conforme os grupos que estavam ligados aos carbonos da dupla original. Se a hidrólise fosse oxidativa, os aldeídos seriam convertidos em ácidos carboxílicos, mas esse não é o caso do procedimento em análise.

Considere o composto de fórmula CH₃—CH=CH—CH₃.

Após a ozonólise completa desse composto, seguida de hidrólise redutora, os produtos principais da reação são`,["um único aldeído.","dois ácidos carboxílicos.","um aldeído e uma cetona.","duas cetonas.","dois aldeídos."],"E",`O but-2-eno é simétrico: cada carbono da dupla está ligado a um CH₃ e a um H. A ozonólise corta a dupla e cada carbono vira carbonila com H → CH₃−CHO (etanal). Formam-se dois aldeídos (duas moléculas de etanal).

Não há ácidos porque a hidrólise é redutora; não há cetona porque os carbonos da dupla têm H.`,"Esquema: CH₃–CH=CH–CH₃ → 1) O₃; 2) Zn, AcOH → 2 CH₃CHO (but-2-eno → ozonólise → etanal).");

Q(1,11,"Sociologia","Foucault: poder disciplinar e vigilância",2,`Vigiar e Punir

Em Vigiar e Punir (1975), Michel Foucault analisa a transformação histórica dos mecanismos de punição, evidenciando a passagem de uma soberania que se exercia de modo espetacular sobre os corpos — por meio de suplícios públicos, execuções em praça, marcas a ferro em brasa — para uma racionalidade penal orientada pela normatização dos comportamentos. Nessa nova lógica, a punição torna-se difusa, sutil e incorporada ao cotidiano institucional: opera não mais sobre o corpo condenado, mas sobre o sujeito, em sua conduta cotidiana, sua interioridade e sua consciência.

A arquitetura disciplinar do século XIX, exemplificada no modelo panóptico projetado pelo filósofo utilitarista Jeremy Bentham, permite que a simples possibilidade de vigilância — mesmo quando ninguém está de fato observando — leve o indivíduo a reger-se pelas normas como se estivesse constantemente sob observação. A escola, o quartel, o hospital, a fábrica e a prisão compartilham a mesma gramática: horários rigorosos, hierarquia de olhares, distribuição espacial que separa e classifica.

A nova lógica punitiva analisada por Foucault é marcada pela`,["supressão da violência física por meio de penas exemplares aplicadas em público.","transferência da função punitiva ao sistema educacional como forma de controle social.","atuação sobre a consciência individual por meio de dispositivos disciplinares que promovem a interiorização da norma.","delegação da punição à psiquiatria, em substituição ao sistema jurídico tradicional.","retorno ao uso de penas corporais em contextos institucionais, como forma de reafirmar o poder estatal."],"C",`O poder disciplinar moderno age sobre a subjetividade (conduta, hábitos, interioridade), e não mais sobre o corpo pelo espetáculo do suplício. O panóptico faz o indivíduo se vigiar: a norma é internalizada.

A e E remetem ao regime anterior; B reduz a análise à escola; D confunde a análise geral com a genealogia da psiquiatria.`);

Q(1,12,"Física","Eletrodinâmica: associação de pilhas e resistor",3,`Numa oficina de eletrônica improvisada na garagem, Beatriz — estudante do terceiro ano do técnico em automação industrial — recebeu como exercício de laboratório montar um circuito simples que acenda um LED usando três pilhas comuns, um resistor e um pouco de fita isolante. O material da bancada inclui pilhas AA novas, de 1,5 V cada, um resistor variável, alicate, multímetro e uma placa-teste.

Na embalagem do LED, um pequeno gráfico técnico mostra que o componente opera adequadamente quando recebe 2,5 V de tensão e é atravessado por uma corrente de 20 mA. Acima dessa corrente, a junção semicondutora aquece rapidamente e o LED queima em poucos segundos.

Beatriz precisa então associar as três pilhas de forma a obter a maior diferença de potencial possível e escolher o resistor adequado para que o LED receba apenas a tensão e a corrente indicadas na embalagem.

Considerando esses dados, a associação correta das pilhas e o valor do resistor são`,["pilhas em paralelo e resistor de 50 Ω.","pilhas em série e resistor de 100 Ω.","pilhas em paralelo e resistor de 200 Ω.","pilhas em série e resistor de 25 Ω.","pilhas em série e resistor de 50 Ω."],"B",`Maior tensão: pilhas em série → 3 · 1,5 = 4,5 V (em paralelo seriam só 1,5 V, insuficiente).

O resistor absorve 4,5 − 2,5 = 2,0 V com a mesma corrente do LED (0,020 A): R = 2,0/0,020 = 100 Ω. Resistores menores (25 Ω, 50 Ω) deixariam passar corrente acima do limite.`);

Q(1,13,"Física","Eletrodinâmica: potência e resistor em série",3,`Camila, estudante universitária, acaba de se mudar de Belo Horizonte para São Paulo, onde a rede elétrica residencial disponível é de 220 V. Entre os utensílios que trouxe da casa antiga está um chuveiro elétrico completamente funcional, mas projetado para funcionar em uma rede de 127 V.

Preocupada com o risco de danificar o aparelho ao ligá-lo diretamente, ela consulta um amigo técnico em eletricidade, que aparece com resistores de diferentes valores, alicate, fita isolante, multímetro e chave de fenda. O objetivo do amigo é adaptar o chuveiro para funcionar com segurança na nova tensão, mantendo a potência dissipada próxima da original — para que o banho continue quente, sem queimar o resistor interno nem sobrecarregar a fiação do apartamento.

A solução correta, entre as apresentadas, é`,["ligar um resistor em série com o chuveiro, aumentando a resistência total do circuito para reduzir a corrente.","diminuir a resistência do chuveiro pela metade, dividindo o fio resistivo interno e ligando suas metades em paralelo.","manter o chuveiro como está, pois a tensão mais alta permitirá maior aquecimento, o que é vantajoso.","cortar parte da resistência interna do chuveiro, o que reduz o aquecimento e evita sobrecarga.","substituir o fio resistivo por um de mesma extensão, mas com maior área transversal, aumentando a resistência conforme a segunda lei de Ohm."],"A",`P = V²/R: com 220 V e a mesma resistência, a potência sobe pelo fator (220/127)² ≈ 3, queimando o resistor.

Um resistor externo em série absorve parte da tensão e o chuveiro recebe ≈ 127 V. B e D reduzem a resistência (pioram); C ignora o risco; E erra a 2ª lei de Ohm (R = ρL/A: maior área → menor resistência).`);

Q(1,14,"Biologia","Ecologia: relações ecológicas (comensalismo)",1,`Em áreas de Cerrado do Mato Grosso do Sul, biólogos que acompanham há duas décadas as populações de araras-azuis (Anodorhynchus hyacinthinus) documentaram uma interação ecológica curiosa entre esses grandes psitacídeos e o gado bovino que pasta nas propriedades rurais da região. Ambas as espécies alimentam-se do fruto do bocaiuval, palmeira nativa. Os bovinos consomem a parte carnosa e a casca do fruto; as sementes duras passam intactas pelo trato digestivo do gado ou são descartadas ao redor dos comedouros. É nesse ponto que as araras entram na cena: com seu bico robusto, quebram as sementes deixadas pelo gado e alimentam-se do miolo oleoso.

As duas espécies, portanto, não competem entre si pelo mesmo recurso: cada uma aproveita uma parte diferente do fruto, e a presença do gado facilita o acesso das araras às sementes, sem prejuízo mensurável para o rebanho. Como observa a bióloga responsável, "o gado nem percebe as araras, mas as araras não vivem mais sem o gado".

A relação ecológica descrita, na qual apenas uma das espécies é beneficiada e a outra permanece neutra, é denominada`,["amensalismo.","competição interespecífica.","comensalismo.","protocooperação.","mutualismo."],"C",`Uma espécie se beneficia (araras) e a outra permanece neutra (bovinos): comensalismo.

Amensalismo exigiria prejuízo; competição, disputa pelo mesmo recurso; protocooperação e mutualismo, benefício mútuo.`);

Q(1,15,"Biologia","Fisiologia humana: hormônios da gestação",2,`Nas primeiras semanas de gestação, o corpo feminino atravessa uma reorganização hormonal cuja finalidade principal é estabelecer e manter as condições fisiológicas necessárias ao desenvolvimento do embrião: manter o endométrio nutrido e espesso para a nidação e evitar que o sistema imunológico materno rejeite o embrião.

Assim que o embrião se implanta, uma estrutura em formação — o trofoblasto, que dará origem à placenta — começa a produzir um hormônio específico dessa fase inicial. Essa substância, detectada em testes de gravidez alguns dias após a implantação, tem como função central manter ativo o corpo lúteo do ovário, prolongando a produção de progesterona. Sem essa sinalização, o corpo lúteo regrediria em poucos dias, o endométrio se descamaria e a gestação não avançaria.

O hormônio cuja concentração se eleva de forma significativa nas primeiras semanas de gestação, com essa função central, é o(a)`,["progesterona.","hormônio folículo-estimulante (FSH).","estrógeno.","hormônio luteinizante (LH).","gonadotrofina coriônica humana (hCG)."],"E",`A hCG é sintetizada pelo trofoblasto, mantém o corpo lúteo ativo (e, com ele, a progesterona) e é o marcador dos testes de gravidez.

A progesterona é produzida pelo corpo lúteo graças à hCG; FSH e LH caem no início da gestação; o estrógeno sobe depois, quando a placenta assume.`);

Q(1,16,"Física","Calorimetria: energia cinética convertida em calor",1,`Numa descida íngreme da BR-116, na chamada Serra das Araras, a fiscalização rodoviária realiza inspeções regulares nos tambores de freio de veículos. Ao descer rampas longas, boa parte da energia cinética do veículo é convertida em calor pelas pastilhas e pelos tambores, e o superaquecimento pode reduzir a capacidade de frenagem (fading).

No teste em análise, um carro de massa 1.500 kg é posto a 72 km/h e freia bruscamente até parar. Toda a energia cinética do veículo é integralmente transformada em calor, dissipado pelos tambores de freio, e as perdas para o ambiente são desprezíveis. No início do processo, a temperatura do tambor é de 20 °C; ao final da frenagem, atinge 120 °C. O calor específico do material do tambor é de 0,6 J/(g·°C).

Nessas condições, a massa do tambor do freio, em quilogramas, é`,["5.","6.","12.","15.","20."],"A",`72 km/h = 20 m/s. Ec = ½ · 1.500 · 20² = 300.000 J.

c = 0,6 J/(g·°C) = 600 J/(kg·°C); ΔT = 100 °C. 300.000 = m · 600 · 100 → m = 5 kg.

Armadilhas: não converter km/h; usar 120 °C em vez de ΔT = 100 °C.`);

Q(1,17,"Química","Estequiometria com rendimento",3,`O processo Solvay, desenvolvido na Bélgica em meados do século XIX pelo químico Ernest Solvay, é ainda hoje o principal método industrial de produção do carbonato de sódio, a "barrilha" das antigas indústrias de vidro. A rota química envolve a reação entre amônia, dióxido de carbono, água e cloreto de sódio, e permite recuperar a amônia ao final do processo.

A reação global simplificada é dada por
2 NH₃ + CO₂ + H₂O + 2 NaCl → Na₂CO₃ + 2 NH₄Cl

Num lote experimental de uma pequena unidade em Salvador, foram utilizados 20 mols de amônia, que reagem totalmente, mas o processo apresenta um rendimento de 90% em relação ao esperado pela estequiometria. A massa molar do carbonato de sódio é 106 g/mol.

A massa de carbonato de sódio produzida, em gramas, é`,["477.","954.","1.060.","1.200.","848."],"B",`Proporção NH₃ : Na₂CO₃ = 2 : 1 → 20 mol de NH₃ geram 10 mol teóricos; com 90%: 9 mol.

9 · 106 = 954 g. Quem ignora o rendimento chega a 1.060 g (C).`);

Q(1,18,"Química","Tensoativos: polaridade e emulsões",2,`Os tensoativos, também chamados surfactantes, são compostos químicos amplamente utilizados por sua capacidade de reduzir a tensão superficial entre dois líquidos ou entre um líquido e um sólido. A característica que os define é a estrutura molecular anfifílica: cada molécula possui uma parte polar, que se liga à água, e uma parte apolar, que interage com hidrocarbonetos e óleos.

Durante o inverno do hemisfério norte, a demanda por petróleo e seus derivados aumenta expressivamente. Um dos gargalos técnicos desse período é o tratamento do petróleo bruto extraído em plataformas offshore, que costuma chegar às refinarias com quantidades significativas de água emulsionada. Como observa um engenheiro de processo, "no auge do inverno, cada hora que se leva para separar a água do óleo é uma hora a menos de refino disponível para o mercado".

A aplicação dos tensoativos que está diretamente relacionada ao aumento do consumo de petróleo no inverno é`,["facilitar a oxidação do petróleo, uma vez que, ao se ligar aos hidrocarbonetos, os tensoativos formam micelas, permitindo que a oxidação ocorra de forma mais eficiente.","servir como catalisadores na reação de combustão dos hidrocarbonetos em caldeiras e motores.","proteger os hidrocarbonetos contra congelamento em temperaturas muito baixas, criando uma camada isolante.","aumentar a densidade do petróleo, tornando-o mais adequado para a combustão no inverno.","melhorar a separação entre água e hidrocarbonetos, reduzindo impurezas no petróleo e aumentando sua eficiência energética."],"E",`Tensoativos atuam na interface óleo/água; aplicados como demulsificantes, aceleram a separação da água emulsionada no petróleo bruto, aumentando a eficiência das refinarias.

A confunde micelas com oxidação; B (catálise), C (anticongelante) e D (densidade) não são funções de tensoativos.`);
