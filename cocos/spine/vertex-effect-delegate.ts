/*
 Copyright (c) 2020-2023 Xiamen Yaji Software Co., Ltd.

 https://www.cocos.com/

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights to
 use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
 of the Software, and to permit persons to whom the Software is furnished to do so,
 subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
*/

import spine from './lib/spine-core.js';

/**
 * @en
 * The delegate of spine vertex effect
 * @zh
 * Spine 顶点动画代理
 * @class VertexEffectDelegate
 */
export class VertexEffectDelegate {
    name = 'sp.VertexEffectDelegate';

    _vertexEffect: spine.VertexEffect | null = null;
    _interpolation: spine.Interpolation | null = null;
    _effectType: string;

    constructor () {
        this._vertexEffect = null;
        this._interpolation = null;
        this._effectType = 'none';
    }

    /**
     * @en Clears vertex effect.
     * @zh 清空顶点效果
     * @method clear
     */
    clear () {
        this._vertexEffect = null;
        this._interpolation = null;
        this._effectType = 'none';
    }

    /**
     * @en Inits delegate with jitter effect
     * @zh 设置顶点抖动效果
     * @method initJitter
     * @param {Number} jitterX
     * @param {Number} jitterY
     */
    initJitter (jitterX: number, jitterY: number): spine.VertexEffect {
        this._effectType = 'jitter';
        this._vertexEffect = new spine.JitterEffect(jitterX, jitterY);
        return this._vertexEffect;
    }

    /**
     * @en Inits delegate with swirl effect
     * @zh 设置顶点漩涡效果
     * @method initSwirlWithPow
     * @param {Number} radius
     * @param {Number} power
     * @return {sp.spine.JitterEffect}
     */
    initSwirlWithPow (radius: number, power: number): spine.VertexEffect {
        this._interpolation = new spine.Pow(power);
        this._vertexEffect = new spine.SwirlEffect(radius, this._interpolation);
        return this._vertexEffect;
    }

    /**
     * @en Inits delegate with swirl effect
     * @zh 设置顶点漩涡效果
     * @method initSwirlWithPowOut
     * @param {Number} radius
     * @param {Number} power
     * @return {sp.spine.SwirlEffect}
     */
    initSwirlWithPowOut (radius:number, power:number) {
        this._interpolation = new spine.PowOut(power);
        this._vertexEffect = new spine.SwirlEffect(radius, this._interpolation);
        return this._vertexEffect;
    }

    /**
     * @en Gets jitter vertex effect
     * @zh 获取顶点抖动效果
     * @method getJitterVertexEffect
     * @return {sp.spine.JitterEffect}
     */
    getJitterVertexEffect () {
        return this._vertexEffect;
    }

    /**
     * @en Gets swirl vertex effect
     * @zh 获取顶点漩涡效果
     * @method getSwirlVertexEffect
     * @return {sp.spine.SwirlEffect}
     */
    getSwirlVertexEffect () {
        return this._vertexEffect;
    }

    /**
     * @en Gets vertex effect
     * @zh 获取顶点效果
     * @method getVertexEffect
     * @return {sp.spine.JitterEffect|sp.spine.SwirlEffect}
     */
    getVertexEffect () {
        return this._vertexEffect;
    }

    /**
     * @en Gets effect type
     * @zh 获取效果类型
     * @method getEffectType
     * @return {String}
     */
    getEffectType () {
        return this._effectType;
    }
}
