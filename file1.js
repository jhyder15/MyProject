
//json file used as array
    var gradesList= [
    {
      "name": "Grade 11",
      "subjectList": [
        {
          "name": "Science",
          "chapterList": [
            {
              "name": "Electric Charge",
              "questionList": [
                {
                  "question": "What is charge?",
                  "answer": "Electric Charge is that physical property of matter due to which the other matter experience a force when matters are placed in electromagnetic field."
                },
                {
                  "question": " How much positive and negative charge is there in a cup of water?",
                  "answer": "The number of molecules in one cup of water is (250/18) × 6.02 × 1023"
                }
              ]
            }
          ]
        },
{
          "name": "Mathematics",
          "chapterList": [
            {
              "name": "Equation of line",
              "questionList": [
                {
                  "question": "What is the slope of x=0?",
                  "answer": "Infinite"
                },
                {
                  "question": " What is the slope of y=0?",
                  "answer": "Zero"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "name": "Grade 12",
      "subjectList": [
        {
          "name": "Social Studies",
          "chapterList": [
            {
              "name": "Rulers of USA",
              "questionList": [
                {
                  "question": "Who controlled the colony of New York before the English?",
                  "answer": "The Dutch"
                },
                {
                  "question": " Who was the founder of New York and New Jersey?",
                  "answer": "The Duke of York"
                }
              ]
            }
          ]
        }
      ]
    }
  ]

    para = document.getElementById("content");
    console.log(gradesList);
    var node = document.getElementById("id1");
    var output="";
    for(var i in gradesList)
    {
      console.log(i);
      console.log(gradesList[i]);
      linode = document.createElement("li");
      txtnode = document.createTextNode(gradesList[i].name);
      linode.appendChild(txtnode);
      node.appendChild(linode);
      for(var j in gradesList[i].subjectList)
      {
        ulnode = document.createElement("ul");
        linode1 = document.createElement("li");
        txtnode = document.createTextNode(gradesList[i].subjectList[j].name);
        linode1.appendChild(txtnode);
        ulnode.appendChild(linode1);
        linode.appendChild(ulnode);
        for(var k in gradesList[i].subjectList[j].chapterList)
        {
          ulnode1 = document.createElement("ul");
          linode2 = document.createElement("li");
          ulnode1.setAttribute("class","chapter");
          txtnode = document.createTextNode(gradesList[i].subjectList[j].chapterList[k].name);
          linode2.appendChild(txtnode);
          ulnode1.appendChild(linode2);
          linode1.appendChild(ulnode1);
            a=1;
            $('#content').append(`<h3>${gradesList[i].subjectList[j].chapterList[k].name}</h3>`);
            for(var g in gradesList[i].subjectList[j].chapterList[k].questionList)
          {
            q1 = document.createElement("p");
            q1.setAttribute("id","q");
            ans = document.createElement("p");
            ans.setAttribute("id","a");
            br = document.createElement("br");
            txt = document.createTextNode(`Q${a})`+gradesList[i].subjectList[j].chapterList[k].questionList[g].question);
            txt1 = document.createTextNode(`Ans)`+gradesList[i].subjectList[j].chapterList[k].questionList[g].answer);
            q1.appendChild(txt);
            ans.appendChild(txt1);
            ans.appendChild(br);
            //$("#q1").append(`Q${a}) ${gradesList[0].subjectList[0].chapterList[0].questionList[g].question}<br>`);
              //$("#q1").append(`Ans) ${gradesList[0].subjectList[0].chapterList[0].questionList[g].answer}<br>`);
              //a++;
              para.appendChild(q1);
              para.appendChild(ans);
              a++;
                    
          }
        }
      }

  }
