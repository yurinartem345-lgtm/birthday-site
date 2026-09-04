from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Здесь временно будет храниться выбор встречи
meeting_choice = {
    "date": "",
    "time": ""
}


@app.route("/")
def home():
    return render_template(
        "index.html",
        meeting=meeting_choice
    )


@app.route("/save-meeting", methods=["POST"])
def save_meeting():
    meeting_choice["date"] = request.form.get("date")
    meeting_choice["time"] = request.form.get("time")

    return redirect(url_for("home"))


@app.route("/admin")
def admin():
    return render_template(
        "admin.html",
        meeting=meeting_choice
    )


if __name__ == "__main__":
    app.run()