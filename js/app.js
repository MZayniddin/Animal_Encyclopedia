const elSearchBtn = document.querySelector('.search-icon > svg');
const elInputVal = document.getElementById('search');
const elAnimalName = document.querySelector('.animal-name');
const elAnimalImg = document.querySelector('.animal-img');
const elAnimalDes = document.querySelector('.animal-description');
const elThemeToggleBtn = document.querySelector('input[type="checkbox"]');
const elDictionary = document.querySelector('.dictionary');
const elForm = document.querySelector('.input-wrapper');

if(localStorage.getItem('theme') === 'light'){
  elDictionary.classList.remove('dark');
  elThemeToggleBtn.checked = true;
}else {
  elDictionary.classList.add('dark');
  elThemeToggleBtn.checked = false;
}

elThemeToggleBtn.addEventListener('click', () => {
  if(elThemeToggleBtn.checked === true){
    elDictionary.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }else if(elThemeToggleBtn.checked === false) {
    elDictionary.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
});

function check(){
  if(elInputVal.value.replace(/ /g, '').length > 2){
    switch(elInputVal.value.toLowerCase()){
      case 'tiger': show('tiger');
      elAnimalDes.innerText = 'The tiger has a muscular body with strong forelimbs, a large head and a tail that is about half the length of its body. Its pelage colouration varies between shades of orange with a white underside and distinctive vertical black stripes; the patterns of which are unique in each individual.';break;
      case 'bear': show('bear');
      elAnimalDes.innerText = 'Bears are mammals belonging to the family Ursidae. They typically have massive bodies, coarse heavy fur, relatively short limbs, and almost rudimentary tails';break;
      case 'cat': show('cat');
      elAnimalDes.innerText = 'The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is often referred to as the domestic cat or house cat to distinguish it from the wild members of the family.';break;
      case 'fox': show('fox');
      elAnimalDes.innerText = 'Foxes are small to medium-sized, omnivorous mammals belonging to several genera of the family Canidae. They have a flattened skull, upright triangular ears, a pointed, slightly upturned snout, and a long bushy tail (or brush).';break;
      case 'leopard': show('leopard');
      elAnimalDes.innerText = 'The leopard (Panthera pardus) is one of the five extant species in the genus Panthera, a member of the cat family, Felidae.[4] It occurs in a wide range in sub-Saharan Africa, in some parts of Western and Central Asia, Southern Russia, and on the Indian subcontinent to Southeast and East Asia.';break;
      case 'elephant': show('elephant');
      elAnimalDes.innerText = "Elephants are the largest existing land animals. Three living species are currently recognised: the African bush elephant, the African forest elephant, and the Asian elephant. They are the only surviving members of the family Elephantidae and the order Proboscidea.";break;
      case 'wolf': show('wolf');
      elAnimalDes.innerText = 'The wolf (Canis lupus), also known as the gray wolf or grey wolf, is a large canine native to Eurasia and North America. More than thirty subspecies of Canis lupus have been recognized, and gray wolves, as popularly understood, comprise wild subspecies.';break;
      case 'dog': show('dog');
      elAnimalDes.innerText = "The dog or domestic dog (Canis familiaris or Canis lupus familiaris) is a domesticated descendant of the wolf. The dog is derived from an ancient, extinct wolf, and the modern wolf is the dog's nearest living relative. The dog was the first species to be domesticated, by hunter-gatherers over 15,000 years ago.";break;
      case 'zebra': show('zebra');
      elAnimalDes.innerText = "Zebras (subgenus Hippotigris) are African equines with distinctive black-and-white striped coats. There are three living species: the Grévy's zebra (Equus grevyi), plains zebra, and the mountain zebra. Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae.";break;
      case 'chicken': show('chicken');
      elAnimalDes.innerText = "The chicken (Gallus gallus domesticus) is a domesticated junglefowl species, with attributes of wild species such as the grey and the Ceylon junglefowl that are originally from Southeastern Asia. Rooster or cock is a term for an adult male bird, and a younger male may be called a cockerel. A male that has been castrated is a capon.";break;
      case 'deer': show('deer');
      elAnimalDes.innerText = "Deer or true deer are hoofed ruminant mammals forming the family Cervidae. The two main groups of deer are the Cervinae, including the muntjac, the elk (wapiti), the red deer, and the fallow deer; and the Capreolinae, including the reindeer (caribou), white-tailed deer, the roe deer, and the moose.";break;
      case 'horse': show('horse');
      elAnimalDes.innerText = "The horse (Equus ferus caballus) is a domesticated, one-toed, hoofed mammal. It belongs to the taxonomic family Equidae and is one of two extant subspecies of Equus ferus. The horse has evolved over the past 45 to 55 million years from a small multi-toed creature, Eohippus, into the large, single-toed animal of today.";break;
      case 'lion': show('lion');
      elAnimalDes.innerText = "The lion (Panthera leo) is a large cat of the genus Panthera native to Africa and India. It has a muscular, broad-chested body, short, rounded head, round ears, and a hairy tuft at the end of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides.";break;
      case 'monkey': show('monkey');
      elAnimalDes.innerText = "Monkey is a common name that may refer to most mammals of the infraorder Simiiformes, also known as the simians. Traditionally, all animals in the group now known as simians are counted as monkeys except the apes, which constitutes an incomplete paraphyletic grouping.";break;
      default: elAnimalDes.innerText = 'There were no results matching the query.';
      
    }
  }
}

elForm.addEventListener('submit', (event) =>{
  event.preventDefault();
  check();
});

elSearchBtn.addEventListener('click', check);

function show(name){
  elAnimalName.innerText = name;
  elAnimalImg.src = `../img/${name}.jpg`;
  elAnimalDes.src = `../descriptions/${name}.txt`;
}