const questions = [
    {
        "question" : "Comment un projet de loi devient-il une loi?",
        "proposals" : 
        [
            "Le lieutenant-gouverneur doit approuver le projet de loi",
            "Approbation par la majorité à la Chambre des communes et au Sénat, puis par le gouverneur général",
            "Le Roi doit signer le projet de loi",
            "Approbation des membres de l'Assemblée législative"
        ], 
        "answerIndex" : 1
    },
    {
        "question" : "Un membre du Parlement de Montréal annonce qu'elle va passer sa fin de semaine dans sa circonscription électorale. Cela signifie qu'elle : ",
        "proposals" : 
        [
            "Sera dans son bureau sur la Colline du Parlement",
            "Visitera la province de Québec",
            "Sera dans un quartier de Montréal, où elle a été élue",
            "Partira en vacances"
        ],
        "answerIndex" : 2
    },
    {
        "question" : "Après une élection fédérale, quel parti forme le nouveau gouvernement?",
        "proposals" : [
            "Le parti ayant le plus de représentants élus est invité par le Gouverneur Général à devenir le parti au pouvoir",
            "Le Roi choisit lui-même un parti pour diriger le gouvernement",
            "Le gouverneur général propose une loi pour que les représentants élus deviennent une entité gouvernante",
            "Les premiers ministres de chaque province choisissent un parti pour diriger le gouvernement"
        ],
        "answerIndex" : 0
    },
    {
        "question" : " Combien de Canadiens environ ont pris part à la Première Guerre mondiale?",
        "proposals" : [
            "7 000",
            "8 millions",
            "Environ 60 000",
            "Plus de 60 000"
        ],
        "answerIndex" : 3
    },
    {
        "question" : "Le Canada a trois territores et combien de provinces?",
        "proposals" : [
            "13",
            "10",
            "3",
            "5"
        ],
        "answerIndex" : 1
    },
    {
        "question" : "Fatima est une nouvelle immigrante au Canada. Quelle loi lui permet d'occuper un emploi à l'égal d'un homme?",
        "proposals" : [
            "L'égalité des femmes et des hommes ",
            "L'égalité de toutes les races",
            "À travail égal, rémunération égale",
            "Égalité des droits"
        ],
        "answerIndex" : 0
    },
    {
        "question" : "D'où vient le nom « Canada »?",
        "proposals" : [
            "D'un mot Inuit signifiant « pays »",
            "D'un mot français signifiant « réunion »",
            "D'un mot métis signifiant « rivières »", 
            "De « kanata », le mot huron-iroquois signifiant village"
        ], 
        "answerIndex " : 3
    },
    {
        "question" : "Donnez un exemple de la manière dont vous pouvez faire preuve de responsabilité en vous impliquant au sein de votre communauté.",
        "proposals" : [
            "Se mêler de ses affaires",
            "Organiser une fête",
            "Garder sa propriété bien entretenue", 
            "Faire du bénévolat"
        ], 
        "answerIndex " : 3
    },
    {
        "question" : "Donnez un exemple d'endroit où l'anglais et le français ont le même statut au Canada.",
        "proposals" : [
            "Dans les écoles",
            "Sur le lieu de travail",
            "Au Parlement canadien", 
            "À l'hôtel de ville"
        ], 
        "answerIndex " : 2
    },
    {
        "question" : "Quel est la premiere vers de l'hymne national canadien?",
        "proposals" : [
            "Ô Canada! Terre de nos aïeux",
            "Ô Canada! Province de nos aïeux",
            "Ô Canada! Ton histoire est une épopée", 
            "Protégera nos foyers et nos droits"
        ], 
        "answerIndex " : 0
    },
    {
        "question" : "Comment les députés sont-ils choisis?",
        "proposals" : [
            "Nommés par le premier ministre",
            "Élus par les citoyens canadiens",
            "Nommés par le Roi", 
            "Élus par les ministres provinciaux"
        ], 
        "answerIndex " : 1
    }
];

var quizzContainer = document.getElementById("quizz-container");
console.log(quizzContainer);
(function init(){
    for(var i = 0; i < questions.length; i++){
        var questionContaier = document.createElement("div");
        questionContaier.className = "question-container";
        var questionElement = document.createElement("p");
        var questionContent = questions[i]["question"];
        var questionContentNode = document.createTextNode(questionContent);
        questionElement.appendChild(questionContentNode);
        questionContaier.appendChild(questionElement);
        for(var j = 0; j < questions[i].proposals.length; j++){
            var proposalElement = document.createElement("input");
            proposalElement.setAttribute("type", "radio");
            proposalElement.setAttribute("name", "proposals");
            proposalElement.setAttribute("id", "proposal" + j);
            proposalContentNode = document.createElement("label");
            proposalContentNode.innerHTML = questions[i].proposals[j];
            questionContaier.appendChild(proposalElement);
            questionContaier.appendChild(proposalContentNode);
            questionContaier.appendChild(document.createElement("br"));
        }
        quizzContainer.appendChild(questionContaier);
    }
})();