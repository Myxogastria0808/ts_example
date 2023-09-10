//クラスのプロパティの内容
//private <-クラス内のみ参照可能
//protected <-サブクラスからの参照も可能
//public <-どこからでも参照可能
type Suji = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Dan = '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9';

//駒の位置を渡すクラス
class Position {
    constructor(private suji: Suji, private dan: Dan) {}
}

//駒を表すクラス
class Piece {
    position: Position;
    constructor(private readonly player: Player, suji: Suji, dan: Dan) {
        this.position = new Position(suji, dan);
    }
}
