import { useEffect, useState } from "react";
import { useAuthenticator } from '@aws-amplify/ui-react';
import type { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();
interface Props {}


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
      point: Number(window.prompt("점수를 입력해주세요(숫자만 입력)")),
     });
  }
  
  function addPointTeam2() {
    client.models.PointRecord.create({ 
      team: 2,
      content: window.prompt("점수 획득 내용을 작성해주세요"),
      point: Number(window.prompt("점수를 입력해주세요(숫자만 입력)")),
     });
  }
  function addPointTeam3() {
    client.models.PointRecord.create({
      team: 3,
      content: window.prompt("점수 획득 내용을 작성해주세요"),
      point: Number(window.prompt("점수를 입력해주세요(숫자만 입력)")),
     });
  }
  function addPointTeam4() {
    client.models.PointRecord.create({
      team: 4,
      content: window.prompt("점수 획득 내용을 작성해주세요"),
      point: Number(window.prompt("점수를 입력해주세요(숫자만 입력)")),
     });
  }
  function addPointTeam5() {
    client.models.PointRecord.create({ 
      team: 5,
      content: window.prompt("점수 획득 내용을 작성해주세요"),
      point: Number(window.prompt("점수를 입력해주세요(숫자만 입력)")),
     });
  }

  function addPointTeam6() {
    client.models.PointRecord.create({ 
      team: 6,
      content: window.prompt("점수 획득 내용을 작성해주세요"),
      point: Number(window.prompt("점수를 입력해주세요(숫자만 입력)")),
     });
  }

    
  function deleteTodo(id: string) {
    client.models.PointRecord.delete({ id })
  }

  function Test() {
	return (
		<div className="contain">
			<div className="scroll-view">
				<span className="text" >
					{"에브라임 청년부 2025 겨울수련회\n현재 순위를 확인하세요!"}
				</span>
				<div className="column">
					<div className="column2">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/91cosp6j.png"} 
							className="image"
						/>
						<div className="row-view">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/qvnam15m.png"} 
								className="image2"
							/>
							<span className="text2" >
								{"팀이름 1"}
							</span>
							<div className="column3">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/bovj99ps.png"} 
									className="image3"
								/>
								<div className="absolute-view">
									<span className="text3" >
										{"0"}
									</span>
								</div>
							</div>
						</div>
						<div className="row-view2">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/rw8ip4wv.png"} 
								className="image2"
							/>
							<span className="text4" >
								{"팀이름 2"}
							</span>
							<div className="column3">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/dwwmflso.png"} 
									className="image3"
								/>
								<div className="absolute-view">
									<span className="text3" >
										{"0"}
									</span>
								</div>
							</div>
						</div>
						<div className="row-view3">
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/vxfkmnc8.png"} 
								className="image4"
							/>
							<span className="text4" >
								{"팀이름 3"}
							</span>
							<div className="column4">
								<img
									src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/g1xpm361.png"} 
									className="image3"
								/>
								<div className="absolute-view">
									<span className="text3" >
										{"0"}
									</span>
								</div>
							</div>
						</div>
					</div>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/onb0yxrp.png"} 
						className="absolute-image"
					/>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/etwgey73.png"} 
						className="absolute-image2"
					/>
				</div>
				<div className="row-view4">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/fjijukcq.png"} 
						className="image2"
					/>
					<span className="text4" >
						{"팀이름 4"}
					</span>
					<div className="column5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/67szujcm.png"} 
							className="image3"
						/>
						<div className="absolute-view">
							<span className="text3" >
								{"0"}
							</span>
						</div>
					</div>
				</div>
				<div className="row-view4">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/hfzea2no.png"} 
						className="image2"
					/>
					<span className="text4" >
						{"팀이름 5"}
					</span>
					<div className="column6">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/vi8b0kat.png"} 
							className="image3"
						/>
						<div className="absolute-view">
							<span className="text3" >
								{"0"}
							</span>
						</div>
					</div>
				</div>
				<div className="row-view5">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/0bb7cf4i.png"} 
						className="image2"
					/>
					<span className="text4" >
						{"팀이름 6"}
					</span>
					<div className="column7">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/bM5l6dsVrS/2hvlq3so.png"} 
							className="image3"
						/>
						<div className="absolute-view">
							<span className="text3" >
								{"0"}
							</span>
						</div>
					</div>
				</div>
				<div className="view">
					<span className="text5" >
						{"Copyright © 2025 PATIKLAB."}
					</span>
				</div>
			</div>
		</div>
	)
  }

  return (
    <main>
		<Test />
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
