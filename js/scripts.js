$(document).ready(function() {
  var text = {
      "all" : "DigiDestined are children selected by benevolent beings to protect the Digital World and sometimes Earth from evil forces. The Digital World is a plane on which Digimon, anthropomorphic creatures that originated from data produced by Earth's communication networks, live. The Digital World is volatile and is vulnerable to attack, and the Digimon that live there often find that they cannot defend their world on their own. Therefore, human children are recruited to defeat their enemies.",

      "agu" : "Agumon (アグモン) is a reptile Digimon, the mascot of Digimon and the partner of Tai Kamiya, the leader of the original DigiDestined. While both are matched well in that they can act rather brashly and hot-headedly when their friends are in danger, Agumon is typically the more cautious one, even if his partner disregards his advice. The pair joke around with each other a lot and go through many trials together, but their trust in each other is evident.",

      "gabu" : "Gabumon is a lizard-like Digimon who wears a white pelt with dark blue stripes. He is the partner of Yamato Matt Ishida. Whereas Matt can be cool and conflicted, Gabumon is more emotional and steadfastly loyal. He gives his partner free reign to find himself but tries to reason with him anyway. Whenever Matt falls too far, however, Gabumon is the one who brings him back. They eventually reach the point where they can communicate without words, comfortable in the silence.",

      "biyo" : "Biyomon's name derived from the onomatopoeia for tweeting (ぴよぴよ Piyopiyo). Biyomon is a small bird with much curiosity whose wings double as arms that she uses to grip objects. Biyomon's partner is Sora Takenouchi.",

      "tento" : "Based on a Ladybug (瓢虫 Tentoumushi), Tentomon is a naturally friendly Digimon with carefree way of life (he often expresses this by sniffing the scent of flowers or napping under a tree). Tentomon is partner's of Izzy Izumi. Although Tentomon admires and is fascinated by Izzy's curiosity for everything he doesn't understand, he is also slightly baffled when Izzy chooses to look at his laptop instead of socializing with the other children, and occasionally becomes annoyed when Izzy chooses to investigate mysteries rather than solve more immediate problems.",

      "pal" : "Palmon (パルモン Parumon) is a plant Digimon with reptile features, able to use her    clawed tendrils in her multi-purpose Poison Ivy attack. Good friends with Mimi Tachikawa, Palmon sees the good in her and often tries to make her partner appreciate what she has.",

      "goma" : "Gomamon is a creature who appears to be based on a young harp seal. He has purple markings and spots all over his body as well as some orange hair on the back of his head. Unlike most of the partner Digimon, Gomamon usually mocks his partner Joe rather than support him in the beginning, and is amused by Joe's constant complaining. Their friendship improves over time, however, and they bond during their climb up Infinity Mountain. Joe occasionally jokes about Gomamon's lack of hands.",

      "pata" : "Patamon is the playful Digimon partner of Takeru 'T.K.' Takaishi. In Digimon Adventure, Patamon was the last of the DigiDestined Digimon to achieve his Champion and Ultimate forms, achieving both long after his teammates did. However, both his Champion and Ultimate forms are immensely powerful.",

      "gato" : "Gatomon (テイルモン Tailmon) is an Exalted Beast Digimon in the form of a bipedal white cat with a power ring on her tail. Unlike the others, Gatomon is a champion level Digimon and thus the oldest of the original eight. Originally, Gatomon's DigiEgg was separated from the other seven Chosen Digimon during an attack by Piedmon. When she hatched she was found by Myotismon and conditioned into one of the evil Digimon's lieutenants. Eventually Gatomon joins Kari Kamiya and the other DigiDestined in their fight with the Dark Masters and Apocalymon. She is kind, playful and extremely loyal"
  };

  var equalizeHeights = function(element1, element2) {
    $(element2).height($(element1).height());
  };

  var swapClasses = function(element, oldClass, newClass) {
    return $(element).removeClass(oldClass).addClass(newClass);
  };

  var setText = function(element, text) {
    return $(element).text(text);
  };

  var $imageBox = $("#image-box");
  var $textBox = $("#text-box");

  equalizeHeights('#digi-titles', $imageBox);

  $("a").click(function (e) {
    e.preventDefault();
    var newClass = $(this).attr("id");
    var oldClass = $imageBox.attr("class");

    // change image
    $imageBox.fadeOut(function() {
		  swapClasses(this, oldClass, newClass).fadeIn("slow");
    });

    // change text
    $textBox.fadeOut(function() {
      setText(this, text[newClass]).fadeIn("slow");
    });
	});
});
