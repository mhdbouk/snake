function Snake() {
    this.x = scl;
    this.y = scl;
    this.xspeed = 1;
    this.yspeed = 0;
    this.tail = [];
    this.tailCount = 0;

    this.SetDirection = function (x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    this.Death = function () {
        if (this.x >= width - scl || this.x == 0 || this.y == 0 || this.y >= height - scl) {
            this.x = 10;
            this.y = 10;
            this.xspeed = 1;
            this.yspeed = 0;
            this.tail = [];
            this.tailCount = 0;
            return true;
        } else {
            for (var i = 0; i < this.tail.length; i++) {
                if (dist(this.x, this.y, this.tail[i].x, this.tail[i].y) < 1) {
                    this.x = 10;
                    this.y = 10;
                    this.xspeed = 1;
                    this.yspeed = 0;
                    this.tail = [];
                    this.tailCount = 0;
                    return true;
                }
            }
        }
        return false;
    }

    this.Eat = function (food) {
        var distance = dist(this.x, this.y, food.x, food.y);
        if (distance < 1) {
            this.tailCount++;
            return true;
        } else {
            return false;
        }
    }

    this.Show = function () {
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);
    }

    this.Update = function () {
        if (this.tailCount === this.tail.length) {
            for (var i = 0; i < this.tail.length - 1; i++) {
                this.tail[i] = this.tail[i + 1];
            }
        }
        this.tail[this.tailCount - 1] = createVector(this.x, this.y);

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;
        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }


}