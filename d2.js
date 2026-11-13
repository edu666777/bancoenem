Q(1,19,"Matemática","Probabilidade condicional",3,`Numa concessionária de automóveis em Fortaleza, cinco funcionários do setor de vendas participam de um sorteio interno cujo prêmio é um carro popular zero quilômetro. Sobre a mesa da diretoria são colocadas cinco chaves visualmente idênticas, das quais apenas uma efetivamente liga o carro estacionado no pátio. Cada funcionário, em ordem previamente sorteada, escolhe uma chave e tenta ligar o motor. O primeiro que conseguir ganha o carro; os que fracassam deixam a sua chave descartada, sem voltar ao monte, e passam a vez ao seguinte.

Não há truque: os funcionários não sabem qual chave é a correta, e cada tentativa é feita ao acaso, com as chaves ainda disponíveis no momento. O terceiro a tentar só terá a chance de ganhar se os dois primeiros fracassarem.

A probabilidade de que o terceiro funcionário seja o ganhador do carro é`,["1/5.","1/4.","1/3.","2/5.","1/2."],"A",`Os dois primeiros erram e o terceiro acerta: (4/5)·(3/4)·(1/3) = 1/5.

Por simetria, a chave certa tem a mesma chance de estar em qualquer posição da fila: 1/5 para cada um. Quem marca 1/3 esquece que o terceiro só tenta se os dois primeiros falharem.`);

Q(1,20,"Matemática","Análise combinatória: princípio multiplicativo",3,`Uma empresa de segurança patrimonial, sediada em Curitiba, utiliza um sistema de código numérico com treze dígitos para autorizar o acesso remoto às centrais de alarme. O código é gerado automaticamente pelo servidor da empresa, seguindo três regras internas:

Os três primeiros dígitos são fixos e correspondem ao prefixo da concessionária: devem ser 7, 8 e 9, exatamente nessa ordem.
Os seis dígitos seguintes podem ser qualquer combinação dos algarismos 1, 2, 3 e 4, com possibilidade de repetição.
Os quatro últimos dígitos podem ser qualquer combinação dos algarismos de 0 a 9, também com possibilidade de repetição.

A quantidade de códigos diferentes que podem ser gerados por esse sistema é`,["4⁶ × 10⁴.","3,6 × 10⁴.","4⁶ × 9⁴.","4⁶ × 10³.","4⁶ × 10⁵."],"A",`Bloco fixo: fator 1. Seis dígitos com 4 opções: 4⁶. Quatro dígitos com 10 opções: 10⁴. Total: 4⁶ × 10⁴ = 40.960.000.

C troca 10 por 9; D e E erram o expoente do último bloco.`);

Q(1,21,"Matemática","Porcentagem: horas extras",1,`Wagner trabalha há oito anos como auxiliar administrativo em uma pequena distribuidora de materiais de construção na periferia de Manaus. Sua carteira registra jornada mensal de 50 horas. Das cinquenta horas mensais, quarenta são consideradas horas obrigatórias e as dez restantes, horas extras. A convenção coletiva local determina que o valor pago por hora extra seja 50% maior do que o valor pago por hora obrigatória.

No fechamento do mês, Wagner recebe R$ 440,00 pelas cinquenta horas trabalhadas nas condições acima. Preocupado com a próxima parcela do curso de contabilidade, ele decide simular quantas horas extras adicionais precisaria fazer para elevar seu ganho mensal em R$ 792,00.

O número de horas extras adicionais que ele precisa cumprir para obter esse acréscimo é`,["55.","60.","66.","70.","80."],"C",`Hora obrigatória x; hora extra 1,5x. 40x + 10·1,5x = 55x = 440 → x = R$ 8,00; hora extra = R$ 12,00.

792/12 = 66 horas extras. Erro comum: dividir por 8 (99 h).`);

Q(1,22,"Física","Cinemática: lançamento horizontal",2,`No laboratório de entomologia da Universidade Federal do Paraná, pesquisadores estudam o comportamento defensivo do percevejo-espirrador, inseto capaz de expelir jatos de substância química com precisão quando ameaçado. O objetivo do experimento é medir a velocidade inicial com que a substância é lançada, calculando-a a partir da geometria do arremesso, fotografado por câmera de alta velocidade.

Em um dos registros, o inseto pousa sobre um pequeno pedestal e dispara o jato exatamente na horizontal, a partir de uma altura de 0,2 metros acima do chão. A câmera registra o ponto exato em que o jato atinge o solo, a uma distância horizontal de 0,3 metros do pedestal. A resistência do ar pode ser desprezada, e a aceleração da gravidade adotada é g = 10 m/s².

A velocidade inicial horizontal necessária para que o jato percorra 0,3 metros de distância no chão é`,["1 m/s.","1,5 m/s.","2 m/s.","4 m/s.","5 m/s."],"B",`Queda: h = ½gt² → 0,2 = 5t² → t = 0,2 s.

Horizontal (MU): v = d/t = 0,3/0,2 = 1,5 m/s.`);

Q(1,23,"Matemática","Regra de três composta",1,`Numa pequena olaria familiar em Iranduba, no interior do Amazonas, três funcionários produziam, no início do ano, 720 tijolos por dia, trabalhando seis horas diárias em regime constante. A demanda cresceu e o proprietário decidiu ajustar a produção: contratou mais dois funcionários — passando de três para cinco no total — e alongou o expediente de seis para nove horas por dia. Como a técnica de produção continua a mesma e os funcionários mantêm o mesmo ritmo individual, é razoável supor que a produtividade dependa proporcionalmente do número de trabalhadores e da duração da jornada.

Nessas condições, a produção diária esperada, em tijolos, é`,["1.080.","1.200.","1.350.","1.440.","1.800."],"E",`As duas grandezas são diretamente proporcionais à produção: 720 · (5/3) · (9/6) = 720 · 2,5 = 1.800 tijolos.

Aplicar só um fator gera respostas parciais: 1.200 (só funcionários) ou 1.080 (só horas).`);

Q(1,24,"Matemática","Geometria plana: área do triângulo equilátero",3,`Em um projeto de intervenção urbana desenvolvido por estudantes de arquitetura da Universidade Federal de Pernambuco, a proposta era instalar, em três praças diferentes de Olinda, painéis decorativos em forma de triângulos equiláteros — todos com o mesmo desenho interno, variando apenas o tamanho dos lados. Antes de encomendar as placas de aço, os estudantes precisavam calcular a área ocupada por cada peça.

Um dos alunos observou que todas as medidas dos lados dos triângulos equiláteros são iguais entre si e que todos os ângulos internos medem sessenta graus. Sabendo disso, ele quis expressar de maneira geral qual a relação entre a área do triângulo e o comprimento de seus lados.

A relação entre a área A de um triângulo equilátero e o comprimento L de seus lados é descrita ao afirmar que`,["a área é diretamente proporcional ao comprimento do lado.","a área é diretamente proporcional ao quadrado do comprimento do lado.","a área é diretamente proporcional ao cubo do comprimento do lado.","a área é inversamente proporcional ao comprimento do lado.","a área é inversamente proporcional ao quadrado do comprimento do lado."],"B",`A = (√3/4) · L²: a área é uma constante vezes L². Dobrar o lado quadruplica a área.

Proporcionalidade ao lado vale para o perímetro; ao cubo, para volumes; as inversas não fazem sentido.`);

Q(1,25,"História","EUA e América Latina: Doutrina Monroe",2,`Ao longo dos séculos XIX e XX, as relações entre Cuba e os Estados Unidos oscilaram entre a interferência militar direta, o intervencionismo econômico e a hostilidade ideológica declarada. Já na segunda década do século XIX, quando os processos de independência sacudiam a América hispânica, os Estados Unidos se apressaram a formular uma doutrina de política externa que definisse sua posição no hemisfério ocidental. O anúncio veio em 1823, em mensagem do presidente ao Congresso, e ficou conhecido pela síntese "América para os americanos": qualquer nova tentativa de colonização europeia no continente americano, ou de interferência nos assuntos das nações independentes já constituídas, seria considerada hostil aos interesses dos Estados Unidos.

Essa formulação viria a servir, ao longo de mais de um século, como base doutrinária para a política externa norte-americana em relação à América Latina — Cuba incluída.

A doutrina de política externa formulada em 1823 e descrita no texto é a`,["Doutrina Truman.","Doutrina Monroe.","Política do Big Stick.","Política da Boa Vizinhança.","Doutrina de Contenção."],"B",`A Doutrina Monroe foi anunciada por James Monroe em dezembro de 1823 ("América para os americanos").

Truman (1947) e Contenção (Kennan, 1946–47) são da Guerra Fria; Big Stick é de Theodore Roosevelt (início do séc. XX); Boa Vizinhança, de F. Roosevelt (anos 1930).`);

Q(1,26,"Geografia","Geopolítica: Antártida e cooperação científica",1,`Nas últimas décadas, países da América Latina — em especial Argentina, Chile, Brasil, Peru, Uruguai e Equador — têm intensificado sua presença institucional na Antártida, com investimento crescente em estações de pesquisa, participação em fóruns diplomáticos e treinamento de expedições científicas. O Brasil mantém a Estação Antártica Comandante Ferraz, reconstruída em 2020 após incêndio ocorrido em 2012. Como observou a coordenadora do PROANTAR, "estar na Antártida não é ambição territorial; é condição para participar do debate global sobre o clima do planeta".

O Tratado da Antártida, em vigor desde 1961 e reforçado pelo Protocolo de Madri de 1991, proíbe expressamente a exploração mineral no continente e destina o território exclusivamente a fins pacíficos e à pesquisa científica.

Com base nas informações apresentadas, a principal motivação para o interesse dos países latino-americanos no continente antártico é o(a)`,["desenvolvimento de pesquisas científicas e cooperação internacional.","presença de jazidas minerais e potencial para exploração.","expansão de territórios agrícolas para produção de alimentos.","estabelecimento de rotas terrestres para o comércio intercontinental.","exploração de recursos florestais e madeireiros."],"A",`O Tratado da Antártida e o Protocolo de Madri proíbem a exploração mineral e reservam o continente para fins pacíficos e científicos — o que elimina B, C, D e E. Resta a pesquisa científica com cooperação internacional.`);

Q(1,27,"Biologia","Ecologia: impactos urbanos e impermeabilização",1,`As chuvas intensas que atingiram a Região Metropolitana de São Paulo entre janeiro e fevereiro de 2026 provocaram enchentes que interditaram mais de setenta pontos de tráfego e alagaram quase mil residências no extremo leste da cidade. O Boletim Epidemiológico registrou aumento de casos de leptospirose, dengue e diarreias infecciosas nas áreas afetadas. Nas áreas periurbanas onde antes havia vegetação de várzea, a biodiversidade local também mostrou queda.

Especialistas em ecologia urbana associam a gravidade desses episódios a um conjunto de transformações ligadas à industrialização e à globalização: pavimentação intensiva do solo, canalização de córregos, adensamento de moradias em fundos de vale e a supressão de matas ciliares. Como resume uma professora da USP, "o problema não é chover mais; é a cidade ter perdido a capacidade de deixar a chuva passar".

Entre as consequências desses processos que agravam os problemas mencionados no texto, uma das principais é a`,["eutrofização dos corpos d'água.","impermeabilização dos solos.","diminuição da camada de ozônio.","aumento da taxa de fotossíntese.","acidificação dos oceanos."],"B",`Asfalto e concreto substituem superfícies permeáveis: a água não infiltra, escoa em superfície, satura a drenagem e alaga — favorecendo também vetores e patógenos.

Eutrofização, ozônio e acidificação não explicam o mecanismo das enchentes; fotossíntese maior seria positiva.`);

Q(1,28,"Química","Funções inorgânicas: chuva ácida e biodiesel",1,`O óleo diesel derivado do petróleo é amplamente utilizado como combustível em veículos pesados, geradores e maquinários agrícolas. Sua combustão libera, além de dióxido de carbono e vapor d'água, quantidades significativas de compostos sulfurados — principalmente dióxido de enxofre (SO₂). Uma vez lançados na atmosfera, esses compostos sofrem reações de oxidação e, combinados com a umidade do ar, precipitam na forma de ácido sulfúrico diluído. É a chamada chuva ácida, que corrói monumentos, acidifica rios e lagos e prejudica florestas.

O biodiesel, por sua vez, é um combustível produzido a partir de fontes renováveis — óleos vegetais e gordura animal —, submetido a um processo químico chamado transesterificação. Sua composição química não contém, essencialmente, enxofre em quantidades significativas.

Considerando o problema da chuva ácida, a principal vantagem do biodiesel em relação ao óleo diesel convencional é o fato de que o biodiesel`,["possui maior eficiência energética, reduzindo o consumo total de combustível.","não libera gases de efeito estufa durante a combustão.","é produzido a partir de fontes renováveis, contribuindo para a sustentabilidade.","não contém compostos sulfurados, diminuindo a formação de chuva ácida.","melhora o desempenho dos motores, reduzindo a emissão de poluentes."],"D",`A chuva ácida vem principalmente do SO₂ da queima de combustíveis com enxofre. O biodiesel praticamente não tem enxofre → muito menos SO₂.

A, C e E citam vantagens que não se ligam à chuva ácida; B é falsa (o biodiesel emite CO₂).`);

Q(1,29,"Linguagens","Literatura: Os Sertões e linguagem poética",2,`Os Sertões

"A terra atrai irresistivelmente o homem, arrebatando-o na própria correnteza dos rios que, do Iguaçu ao Tietê, traçando originalíssima rede hidrográfica, correm da costa para os sertões, como se nascessem nos mares e canalizassem as suas energias eternas para os recessos das matas opulentas. Rasgam facilmente aqueles estratos em traçados uniformes, sem talvegues deprimidos, e dão ao conjunto dos terrenos até além do Paraná a feição de largos plainos ondulados, desmedidos.

Entretanto, para leste a natureza é diversa. Estereografa-se, duramente, nas placas rígidas dos afloramentos gnáissicos; e o talude dos planaltos dobra-se do socalco da Mantiqueira, onde se encaixa o Paraíba, ou desfaz-se em rebentos que, após apontarem as alturas de píncaros centralizados pelo Itatiaia, levam até o âmago de Minas as paisagens alpestres do litoral."
Euclides da Cunha. Os Sertões, 1902.

Publicada em 1902, a obra reúne relato de guerra, tratado geográfico e composição literária num único volume. O trecho pertence às páginas iniciais, em que o autor percorre o relevo brasileiro antes de chegar ao sertão de Canudos.

O tipo de linguagem que caracteriza esse trecho é`,["informal.","técnica.","poética.","literal.","jornalística."],"C",`Há personificação (a terra "atrai" e "arrebata"), comparação ("como se nascessem nos mares") e adjetivação conotativa ("energias eternas", "matas opulentas").

O trecho tem termos técnicos ("talvegues", "afloramentos gnáissicos") — por isso B tenta —, mas o vocabulário científico serve ao efeito estético: o léxico é do geólogo, o gesto é do poeta.`);

Q(1,30,"Química","Forças intermoleculares: sublimação do gelo seco",2,`O gelo seco é o nome popular do dióxido de carbono no estado sólido (CO₂(s)). É empregado em ambientes que exigem refrigeração intensa sem umidade justamente porque, ao contrário do gelo comum, sublima diretamente do estado sólido para o gasoso, sem formar poças de água.

No estado sólido, as moléculas de CO₂ ocupam posições fixas em um retículo cristalino. Cada molécula, isoladamente, é apolar — a geometria linear O=C=O anula o momento dipolar total, embora as ligações C=O individuais sejam polares. Isso significa que a coesão entre as moléculas de CO₂ no cristal não depende de dipolos permanentes, mas de outra classe de interação intermolecular, presente em toda matéria.

Quando o gelo seco sublima, o tipo de interação que é rompida entre as partículas do CO₂ sólido é a(o)`,["ligação covalente.","ligação iônica.","força de dispersão de London.","ligação metálica.","ligação de hidrogênio."],"C",`Na mudança de estado rompem-se interações entre moléculas, não as ligações covalentes C=O. Como o CO₂ é apolar, a única interação entre suas moléculas é a dispersão de London (dipolos induzidos).

Iônica e metálica não existem aqui; ligação de hidrogênio exige H ligado a F, O ou N.`);

Q(1,31,"Matemática","Equação do 2º grau: parcelamentos",2,`Fernanda estuda contabilidade à noite e trabalha durante o dia como caixa em uma loja de departamentos em Anápolis, Goiás. O modelo de carro escolhido sai por R$ 60.000,00 — e a empresa oferece duas opções de parcelamento sem juros para esse valor.

Na Opção 1, o valor é dividido em N parcelas mensais iguais. Na Opção 2, o mesmo valor é dividido em (N + 6) parcelas mensais, e cada parcela sai R$ 500,00 mais barata do que as parcelas da Opção 1. O valor total a ser pago é o mesmo nas duas opções.

Nessas condições, o número de parcelas N estabelecido na Opção 1 é`,["12.","18.","24.","30.","36."],"C",`(N + 6)·(60.000/N − 500) = 60.000 → N² + 6N − 720 = 0.

Δ = 36 + 2.880 = 2.916 = 54² → N = (−6 + 54)/2 = 24. Conferência: 60.000/24 = 2.500 e 60.000/30 = 2.000 (diferença de R$ 500).`);

Q(1,32,"Linguagens","Educação Física: doping e valores olímpicos",1,`O doping — uso deliberado de substâncias ou métodos proibidos para melhorar o desempenho físico de um atleta — representa, no esporte contemporâneo, mais do que uma questão de saúde individual. Ele compromete a integridade da própria competição.

Os Princípios Fundamentais do Olimpismo, inscritos na Carta Olímpica, estabelecem que a prática esportiva deve ocorrer sem discriminação de qualquer espécie e em espírito de fair play — isto é, sob igualdade de condições entre os competidores, de modo que a diferença no resultado reflita apenas mérito, treino e preparo. A esse princípio soma-se o respeito: pelo adversário, pelas regras livremente aceitas por todos e pelo próprio corpo.

O atleta que se dopa quebra os dois de uma só vez. Cria artificialmente uma vantagem que nenhum concorrente tem, anulando a paridade que dá sentido à disputa, e trata regras e adversários como obstáculos a contornar por fora do combinado. "Não existe pódio justo quando um dos competidores começou a prova em outra linha de largada."

Os valores olímpicos diretamente violados pela prática do doping, entre os apresentados nas alternativas, são`,["amizade e respeito.","respeito e igualdade.","excelência e amizade.","respeito e esforço.","justiça e amizade."],"B",`O texto nomeia dois princípios: igualdade (fair play, mesmas condições) e respeito (ao adversário, às regras e ao corpo). O doping fere os dois.

Amizade, excelência, esforço e justiça não são os princípios desenvolvidos na passagem.`);

Q(1,33,"História","Independências na América: Bolívar e Haiti (Espanhol)",2,`Simón Bolívar y el Haití independiente

Simón Bolívar, conocido como "El Libertador", lideró el movimiento de independencia de varias colonias españolas en América Latina, incluida Venezuela. Durante su jornada, buscó apoyo de potencias europeas, incluso de Inglaterra, que tenía interés en debilitar el imperio español. Inglaterra proporcionó préstamos y apoyo militar a Bolívar, pero su interés estaba más enfocado en las ganancias económicas que en un compromiso ideológico con la independencia latinoamericana.

La independencia de Haití es uno de los eventos más significativos en la historia de América Latina, ya que fue la primera revolución exitosa contra el colonialismo europeo en América. Haití logró su independencia de Francia en 1804, después de una serie de luchas lideradas por esclavos y exesclavos, con la figura destacada de Toussaint Louverture. Ya consolidada su independencia, Haití se convirtió en refugio y base de apoyo para Simón Bolívar, que allí desembarcó en 1815 y 1816 tras sus derrotas en Venezuela.

A alternativa que descreve corretamente a relação entre Simón Bolívar e o Haiti independente é`,["Bolívar recebeu ajuda de soldados e equipamentos do Haiti e, em troca, Pétion exigiu que Bolívar libertasse os escravos da América Espanhola, apoiando assim a extensão do ideal libertador haitiano.","Simón Bolívar não estava disposto a pôr em movimento a abolição gradual da escravidão, mas auxiliou a independência do Haiti da França.","Simón Bolívar foi um inimigo declarado do governo haitiano.","Simón Bolívar, na Colômbia, enviou tropas para apoiar a independência do Haiti contra a Espanha.","Simón Bolívar não manteve nenhuma relação com o Haiti ao longo de suas campanhas."],"A",`Em 1815–1816, Bolívar refugiou-se no Haiti de Alexandre Pétion, que lhe forneceu soldados, armas, navio e recursos, exigindo em troca o compromisso de abolir a escravidão nos territórios libertados.

B coloca Bolívar ajudando uma independência ocorrida 11 anos antes; C e E contradizem os fatos; D erra o adversário (o Haiti lutou contra a França).`);

Q(1,34,"Biologia","Parasitologia: esquistossomose e saneamento",2,`A esquistossomose mansônica é uma doença infecciosa causada pelo Schistosoma mansoni, transmitida por caramujos de água doce do gênero Biomphalaria, hospedeiros intermediários obrigatórios do parasita. Ovos do parasita chegam à água por meio de fezes humanas contaminadas em locais sem saneamento; nesses ovos eclodem miracídios, que infectam os caramujos. Semanas depois, os caramujos liberam cercárias na água, e essas cercárias, ao entrarem em contato com a pele humana em atividades cotidianas — banho de rio, pesca, lavagem de roupa —, penetram a barreira cutânea e atingem a corrente sanguínea.

Segundo o Ministério da Saúde, a esquistossomose ainda é endêmica em áreas rurais e periurbanas do Nordeste, de Minas Gerais e do Espírito Santo, onde a água represada e a ausência de rede de esgoto criam o cenário ideal para o parasita. "Sem saneamento", resume a técnica do programa, "nenhum medicamento vence a doença de forma duradoura".

Com base nas informações do texto, a proposta mais eficaz no controle da esquistossomose mansônica e na manutenção da saúde geral da população local é`,["imunização com vacina contra o Schistosoma mansoni.","controle dos caramujos por meio do gradeamento dos leitos dos rios.","uso de medicamentos antivirais.","saneamento da água que a população bebe e utiliza para lavar.","exposição controlada à água para fortalecer o sistema imunológico."],"D",`O saneamento impede que fezes contaminadas cheguem à água e rompe o ciclo. Remédios tratam a doença instalada, mas não evitam a reinfecção.

Não há vacina de uso rotineiro (A); gradeamento é inviável (B); a doença é parasitária, não viral (C); exposição só gera novas infecções (E).`);

Q(1,35,"Linguagens","Coesão textual: progressão temática",1,`Janela do escritório

"Ele observava o movimento da cidade pela janela do seu escritório. As ruas estavam agitadas, como sempre, mas, naquele momento, algo parecia diferente. O tráfego era intenso, e as pessoas passavam apressadas, mas nenhuma delas parecia notar a beleza sutil do amanhecer. Ele se perdeu em seus pensamentos, refletindo sobre o quanto o tempo havia mudado."

Escrito em terceira pessoa, o fragmento pertence a uma tradição literária que privilegia a observação contemplativa e o fluxo de consciência interior. O texto retoma, ao longo de suas quatro frases, ideias e expressões que se completam mutuamente — ruas, movimento, tráfego, pessoas, amanhecer, tempo —, tecendo uma progressão em que o repertório vai sendo acumulado sem interrupção brusca de tema.

O que garante a progressão temática do texto é`,["o fato de ser narrado em primeira pessoa.","o uso de palavras complexas e técnicas.","o fato de ser narrado em terceira pessoa.","a intertextualidade com outras obras literárias.","a repetição de expressões e ideias ao longo do texto."],"E",`A progressão temática ocorre pela retomada de expressões e campos semânticos interligados: "movimento da cidade" → "ruas", "tráfego", "pessoas"; "amanhecer", "tempo", "havia mudado".

A pessoa do narrador (A, C) é traço da voz, não do encadeamento; não há vocabulário técnico (B) nem intertextualidade (D).`);
