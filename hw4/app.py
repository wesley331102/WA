from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

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

if __name__ == '__main__':
    app.run()