const students = [
  {
    id: 1,
    name: "길동",
  },
  {
    id: 2,
    name: "사또",
  },
  {
    id: 3,
    name: "임당",
  },
  {
    id: 4,
    name: "순신",
  },
];
function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student, index) => {
        // key : 리스트에서 유일한 키값, index보다는 고유의 id를 주는게 좋다.
        // return <li key={index}>{student.name} </li>;
        return <li key={student.id}>{student.name} </li>;
      })}
    </ul>
  );
}
export default AttendanceBook;
