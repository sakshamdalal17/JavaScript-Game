import { Button } from './button.js';

const canvas = document.getElementById("canvas1");

export class UI {
    constructor(game) {
        this.game = game;
        this.fontSize = 20;
        this.fontFamily = 'Creepster';
        this.livesImage = lives;
    }

    draw(context) {
        context.save();
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        context.shadowColor = 'white';
        context.shadowBlur = 0;
        context.font = this.fontSize + 'px ' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;

        //Control Message
        context.fillText('Press Space or Down Arrow key to Hit Enemies.', 20, 20);

        //Target Message
        context.fillText('Target: Hit ' + this.game.minWinningScore + ' enemies in ' + (this.game.maxTime * 0.001).toFixed() + ' seconds.', 20, 40);

        //Score
        context.fillText('Score: ' + this.game.score, 20, 60);

        //Timer
        context.font = this.fontSize * 0.8 + 'px ' + this.fontFamily;
        context.fillText('Time: ' + (this.game.time * 0.001).toFixed(), 20, 80);

        //Lives
        for (let i = 0; i < this.game.lives; i++) {
            context.drawImage(this.livesImage, 25 * i + 20, 90, 25, 25);
        }

        //Game Over message
        if (this.game.gameOver) {
            context.textAlign = 'center';
            context.font = this.fontSize * 2 + 'px ' + this.fontFamily;
            if (this.game.score > this.game.minWinningScore) {
                context.fillStyle = 'green';
                context.fillText('Mission Passed', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 1.2 + 'px ' + this.fontFamily;
                context.fillText('Awesome!! Super human shows super power', this.game.width * 0.5, this.game.height * 0.5 + 20);
                const btn = new Button(this.game, this.game.width * 0.45, this.game.height * 0.5 + 40, 90, 35, 'green');
                btn.draw(context);
                canvas.addEventListener('click', e => {
                    const rect = canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    if (btn.isButtonClicked(x, y)) location.reload();
                });
            }

            else {
                context.fillStyle = 'red';
                context.fillText('Mission failed', this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = this.fontSize * 1.2 + 'px ' + this.fontFamily;
                context.fillText('Recall your super powers!', this.game.width * 0.5, this.game.height * 0.5 + 20);
                const btn = new Button(this.game, this.game.width * 0.45, this.game.height * 0.5 + 40, 90, 35, 'red');
                btn.draw(context);
                canvas.addEventListener('click', e => {
                    const rect = canvas.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    if (btn.isButtonClicked(x, y)) location.reload();
                });
            }
        }
        context.restore();
    }
}