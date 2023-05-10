from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/get_data", methods=["POST"])
def function1():
    post_data = request.get_json()
    # account = post_data.get("account")
    # password = post_data.get("password")

    return jsonify({"message": "success"})
    # json1 = {
    #     "res": column1
    # }
    # return jsonify(json1)

if __name__ == '__main__':
    app.run()