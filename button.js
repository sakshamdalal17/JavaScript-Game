export class Button {
    constructor(game, x, y, width, height, color) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw(context) {
        context.shadowColor = 'transparent';
        context.fillStyle = this.color;
        context.fillRect(this.x, this.y, this.width, this.height);
        context.fillStyle = 'white';
        context.fillText('Restart', this.game.width * 0.5, this.game.height * 0.5 + 67);
    }

    isButtonClicked(xclick, yclick) {
        console.log(xclick > this.x, xclick < this.x + this.width, yclick > this.y, yclick < this.y + this.height);
        return (xclick > this.x && xclick < this.x + this.width) && (yclick > this.y && yclick < this.y + this.height);
    }
}

