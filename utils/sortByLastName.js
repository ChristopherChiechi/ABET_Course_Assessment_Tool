export default function sortByLastName(names) {
  names.sort((a, b) => a.split(" ")[1].localeCompare(b.split(" ")[1]));
}
