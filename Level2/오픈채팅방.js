function solution(record) {
  var answer = [];
  var set = {};

  const concat = {
    Leave: "나갔습니다.",
    Enter: "들어왔습니다.",
  };

  return record
    .map((item) => item.split(" "))
    .filter((item) => {
      const [action, userID, name] = item;
      if (name) {
        set[userID] = name;
      }
      return action !== "Change";
    })
    .map((item) => set[item[1]] + "님이 " + concat[item[0]]);

  console.log(answer);
}

const record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];
// solution(record);

const input = [
    "Green solid name1",
    "Orange liquid name2",
    "Pink gas name3",
    "Blue solid name4",
    "Black gas name5"
]

const MapAndFilter = (input) => {
    const answer = [];
    const array = [];
    const set = {}

    for(i=0;i<input.length;i++) {
        array.push(input[i].split(" "))
    }
    
    array.filter((item) => {
        const [color, form, name] = item;
        console.log(item.color);
    })


    return answer;
}

MapAndFilter(input);
