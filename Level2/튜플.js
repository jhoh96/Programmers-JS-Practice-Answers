function solution(s) {
  var answer = [];
  var sol = [];
  const set = new Set();
  // const array = [];

  const array = s
    .substring(2, s.length - 2)
    .split("},{")
    .map((item) => {
      return item.split(",");
    })
    .sort((a, b) => {
      return a.length - b.length;
    });

  for (i = 0; i < array.length; i++) {
    for (j = 0; j < array[i].length; j++) {
      set.add(parseInt(array[i][j],10));
    }
  }

  answer = Array.from(set);
  console.log(answer);
  return answer;
}

const input1 = "{{2},{2,1},{2,1,3},{2,1,3,4}}";
const input2 = "{{1,2,3},{2,1},{1,2,4,3},{2}}";
solution(input2);
