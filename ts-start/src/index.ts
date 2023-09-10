//基本の型定義
import { primitiveSample, notExistSample, anySample } from './basic/index';
import { logMessage, alwaysThrowError } from './func/basic';
import { isUserSigndIn, isUserSigndIn2, msg1, msg2, sumProductPrice } from './func/parameters';
import { objectSample, typeAliusSample } from './construct/index';
import { arraySample, tupleSample } from './array/index';
import { genericsBasicSample, genericsAdvancedSample } from './generic/index';

//型
primitiveSample();
notExistSample();
anySample();

//func
logMessage('Hello');
// alwaysThrowError('This is a error message.');

//パラメータ
isUserSigndIn('ABC', 'Torahack');
isUserSigndIn('A');
isUserSigndIn2('ABC');

const sum = sumProductPrice(1, 52, 53, 7431, 13, 76, 13);
console.log('sumProductPrice is : ', sum);

msg1('Hello, msg1');
msg2('Hello, msg2');

//construct
objectSample();
typeAliusSample();

//array
arraySample();
tupleSample();

//generic
genericsBasicSample();
genericsAdvancedSample();
