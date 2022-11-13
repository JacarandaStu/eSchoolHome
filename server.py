import flask
import json
import random
import os

app = flask.Flask(__name__)

def createName(n):
    name_ls = []
    s = ["李","王","张","丁","孙","吴","刘"]
    e = ["宁","彭","鹏","友","信","富","强","梅","美",
         "睿","杰","国","勇","捷","征","宏","全","娟"]
    for i in range(n):
        name = random.choice(s)+random.choice(e)
        if random.randint(0,1):
            name += random.choice(e)
        name_ls.append(name)
    return name_ls

name_ls = createName(60)

st = ["未提交","待审核","已通过","未通过"]

@app.route("/history", methods=["POST"])
def index():
    print(list(flask.request.values))
    time = "202210161300"
    title = "20级个人编程作业"
    ddl = "202210171300"
    
    records = []
    for i in range(5):
        record = {
            "id":str(i+1),
            "timestamp":f"%d.%d.%d %d:%d" %(
                int(time[:4]), int(time[4:6]), int(time[6:8]), int(time[8:10]), int(time[10:])),
            "title":title,
            "ddl":f"%d.%d.%d %d:%d" %(
                int(ddl[:4]), int(ddl[4:6]), int(ddl[6:8]), int(ddl[8:10]), int(ddl[10:]))
        }
        records.append(record)
    return flask.Response(json.dumps({"records":records}), mimetype='application/json')

@app.route("/taskIndex")
def task_info():
    task_id = flask.request.values.get("taskID") if "taskID" in flask.request.values else None
    task_id = int(task_id)
    random.seed(task_id)
    aList = [{"userID":f"0000{i}","name":name_ls[i],"statu":random.choice(st)}
         for i in range(60)]
    unfin_ls = [aList[i] for i in range(len(aList)) if aList[i]["statu"] in ["未提交","未通过"]]
    fin_ls = [aList[i] for i in range(len(aList)) if aList[i]["statu"] not in ["未提交","未通过"]]
    return flask.Response(json.dumps({"fin":fin_ls, "unfin":unfin_ls}), mimetype='application/json')

@app.route("/commitInfo")
def commit_info():
    commit_id = flask.request.values.get("commitID") if "commitID" in flask.request.values else None
    print(commit_id)
    return {"name":name_ls[int(commit_id[4:])],
            "no":commit_id,
            "commitTime":"2022-11-11 11:11",
            "fileType":"img"
            }

if __name__ == "__main__":
    app.run()
