# ✨짱구 MBTI 성향 검사✨

### What's MBTI❓

> 개인이 쉽게 응답할 수 있는 자기보고서 문항을 통해 인식하고 판단할 때의 각자 선호하는 경향을 찾고, 이러한 선호 경향들이 인간의 행동에 어떠한 영향을 미치는가를 파악하여 실생활에 응용할 수 있도록 제작된 심리 검사이다. (출처 : wikipedia)

### Planning instrument💪

> 평소에 저는 MBTI를 탐구하는 것을 아주 좋아하고, 그런 덕분에 각 MBTI별 성향을 척척 꿰고 있었습니다. 🤓 그래서 평소에 친구들과 함께 MBTI 테스트를 해보고 공유하는 것도 정말 즐겨했습니다. 어느날 프로젝트 기획 아이디어를 떠올리던 도중, 제가 좋아하고 흥미 있어하는 주제로 제가 배운 것을 적용해보고 싶었습니다. 그때 '아! MBTI 프로젝트를 기획해서 만들면 친구들과 함께 해보고 즐길 수 있겠다'는 생각이 들었습니다. 그래서 제가 지금껏 배운 HTML, CSS, JS를 이용하여 프로젝트를 기획하고 구현하여 이 프로젝트가 탄생하게 되었습니다! 👶

### Execution🌐
<a href="https://mjungpp.github.io/mbti_test/">🌏<em>Go!</em></a><br/>
<br>본 프로젝트는 반응형으로 제작되어 💻과 📱에 모두 최적화 되어있습니다.

### Production period📅

2021.06.25 ~ 2021.07.01 (7 days) 제작
2021.07.09 (1 days) 피드백 반영 후 수정

### Description🔍

> 1. 본 프로젝트는 사용자의 심리 유형을 파악하기 위해 12개의 문항과 2개의 응답이 제공됩니다.
> 2. 사용자가 선택한 응답에 따라 점수를 산정합니다.
> 3. 모든 설문이 끝나면, 점수에 따라 MBTI 유형을 산출하고 유형별 특징을 보여줍니다.
> 4. 다시하기 버튼이 제공되어, 사용자가 원한다면 테스트를 다시 수행하는 기능을 제공합니다.

### Use skills🔨

<img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=HTML5&logoColor=white"/></a>
<img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=CSS3&logoColor=white"/></a>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=black"/></a>

### Source Tree🌳

📦mbti_test<br>
┣ 📂data<br>
┃ ┣ 📜data.json<br>
┃ ┗ 📜result.json<br>
┣ 📂img<br>
┃ ┣ 📂question<br>
┃ ┣ 📂results<br>
┣ 📂src<br>
┃ ┗ 📜main.js<br>
┣ 📜index.html<br>
┣ 📜README.md<br>
┗ 📜style.css<br>

### Feedback🔖

피드백 결과 제 테스트에서 다음과 같은 문제를 발견했습니다.

#### 1. Result 화면에 대한 complain

👤 : 결과에서 MBTI 유형은 나오지 않고 캐릭터와 특성만 나와서 결과의 MBTI 유형을 알 수 없어! (3건) <br>
- 결과에 캐릭터의 MBTI 유형이 출력되지 않아, 어떤 MBTI 결과를 획득했는지에 대한 내용이 없어 불편하다는 의견이 있었습니다.

#### 2. Font Size
👤 : 글씨가 너무 작아서 눈이 침침해.. (5건)
- 모바일에서의 폰트 사이즈가 너무 작다는 피드백이 있었습니다.
#### 3. 결과 유형이 실제 유형과 다름

👤 : 검사 결과가 내 실제 MBTI랑 좀 다른데? <br>
테스트 결과 본인의 기존 유형과, 제 MBTI 테스트 결과가 일치하지 않는 사용자가 몇몇 발생했습니다.
| num | 기존 본인 유형 | 테스트 결과 유형 |
| :---: | :-: | :-: |
| 1 | ENFP | INFP |
| 2 | INFP | ISFP |
| 3 | INFP | ENTP |
| 4 | ENFP | ISFJ |
| 5 | INFP | ISTP |
| 6 | ESTJ | ESFP |
| 7 | ESTP | ESFP |
| 8 | INFP | ISFP |
| 9 | INTJ | ISFJ |
| 10 | INFP | INFJ |
...

이에 따라
1. 결과 화면에 MBTI 유형을 출력
2. 모바일에서의 폰트 사이즈를 8px -> 11px로 확대
3. 검사 정확도를 높이기 위해 추가 질문지를 제작했습니다. json 파일에 설문 데이터를 총 8건 추가했습니다.

### Productor :busts_in_silhouette:

#### minjung park 👩‍💻

##### email✉️ : mjungpp@naver.com<br>

##### github profile :octocat: : https://github.com/mjungpp
