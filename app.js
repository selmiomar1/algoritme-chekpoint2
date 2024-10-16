function insertionSort(arr) {
  // Longueur du tableau
  let n = arr.length;

  // Parcourir chaque élément à partir du deuxième élément
  for (let i = 1; i < n; i++) {
      let key = arr[i]; // L'élément à insérer
      let j = i - 1; // Index de l'élément précédent

      // Déplacer les éléments de arr[0..i-1] qui sont plus grands que key
      while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j]; // Déplacer l'élément vers la droite
          j = j - 1; // Décrémenter j
      }
      // Insérer key à sa position correcte
      arr[j + 1] = key;
  }
  return arr; // Retourner le tableau trié
}

// Exemple d'utilisation
const array = [5, 2, 9, 1, 5, 6];
console.log("Tableau original:", array);
const sortedArray = insertionSort(array);
console.log("Tableau trié:", sortedArray);
