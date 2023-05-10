from flask import Flask, request, jsonify
from flask_cors import CORS
import secrets

app = Flask(__name__)
CORS(app)

global_answer_list = [i+1 for i in range(100)]
global_answer = -1

def get_number():
    global global_answer
    if global_answer == -1:
        global global_answer_list
        global_answer = secrets.choice(global_answer_list)
    return global_answer
        
def reset_number():
    global global_answer
    global_answer = secrets.choice(global_answer_list)

@app.route("/get_url", methods=["GET"])
def get_url():
    url_type = request.args.get("type")
    if url_type == "fb":
        return jsonify({"url": "https://www.facebook.com/profile.php?id=100003010495357"})
    elif url_type == "ig":
        return jsonify({"url": "https://www.instagram.com/ye110w_chi_red/"})
    elif url_type == "link":
        return jsonify({"url": "https://www.linkedin.com/in/%E5%95%9F%E5%AE%8F-%E9%BB%83-a0b6b8240/"})
    elif url_type == "git":
        return jsonify({"url": "https://github.com/wesley331102"})
    else:
        return jsonify({"url": "https://www.facebook.com/"})
    
@app.route("/guess", methods=["POST"])
def guess():
    number = request.get_json()['data']['number']
    answer = get_number()

    if number.isnumeric() == False:
        return jsonify({"type": "error", "msg": "Not a legal answer!"})
    else:
        if number not in [str(i+1) for i in range(100)]:
            return jsonify({"type": "error", "msg": "Not a legal number!"})
        else:
            number = int(number)
            if number > answer:
                return jsonify({"type": "warning", "msg": "Smaller!"})
            elif number < answer:
                return jsonify({"type": "warning", "msg": "Bigger!"})
            else:
                reset_number()
                return jsonify({"type": "correct", "msg": "You are not a robot!"})

if __name__ == '__main__':
    app.run()