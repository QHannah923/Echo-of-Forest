from flask import Flask, send_file, request # type: ignore
import requests
import io

app = Flask(__name__)

@app.route('/audio')
def get_audio():
    url = request.args.get('url')
    response = requests.get(url)
    return send_file(io.BytesIO(response.content), mimetype='audio/mpeg')

if __name__ == "__main__":
    app.run(port=5000)
