import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

function App() {
  const { user, signOut } = useAuthenticator();
  const [points, setPointRecord] = useState<Array<Schema["PointRecord"]["type"]>>([]);

  useEffect(() => {
    client.models.PointRecord.observeQuery().subscribe({
      next: (data) => setPointRecord([...data.items]),
    });
  }, []);

  function addPointTeam1() {
    client.models.PointRecord.create({ 
      team: 1,
      content: window.prompt("점수 획득 내용을 작성해주세요"),
      point: window.Number(),
     });
  }
  
  function addPointTeam2() {
    client.models.PointRecord.create({ 
      team: 2,
      content: window.prompt("점수 획득 내용을 작성해주세요"),
      point: window.Number(),
     });
  }
  function addPointTeam3() {
    client.models.PointRecord.create({
      team: 3,
      content: window.prompt("점수 획득 내용을 작성해주세요"),
      point: window.Number(),
     });
  }
  function addPointTeam4() {
    client.models.PointRecord.create({
      team: 4,
      content: window.prompt("점수 획득 내용을 작성해주세요"),
      point: window.Number(),
     });
  }
  function addPointTeam5() {
    client.models.PointRecord.create({ 
      team: 5,
      content: window.prompt("점수 획득 내용을 작성해주세요"),
      point: window.Number(),
     });
  }

  function addPointTeam6() {
    client.models.PointRecord.create({ 
      team: 6,
      content: window.prompt("점수 획득 내용을 작성해주세요"),
      point: window.Number(),
     });
  }

    
  function deleteTodo(id: string) {
    client.models.PointRecord.delete({ id })
  }

  return (
    <main>
      <h1>{user?.signInDetails?.loginId}'s todos</h1>
      <button onClick={addPointTeam1}>TEAM 1 점수 추가</button>
      <button onClick={addPointTeam2}>TEAM 2 점수 추가</button>
      <button onClick={addPointTeam3}>TEAM 3 점수 추가</button>
      <button onClick={addPointTeam4}>TEAM 4 점수 추가</button>
      <button onClick={addPointTeam5}>TEAM 5 점수 추가</button>
      <button onClick={addPointTeam6}>TEAM 6 점수 추가</button>
      <ul>
        {points.map((point) => (
          <li onClick={() => deleteTodo(point.id)}
          key={point.id}>{point.content}</li>
        ))}
      </ul>
      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
      </div>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default App;
