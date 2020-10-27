var coreNodesJSONString = '{"joinVec2":{"code":"vec2 joinVec2(in float x, in float y){return vec2(x,y);}","meta":""},"joinVec3":{"code":"vec3 joinVec3(in float x, in float y, in float z){return vec3(x,y,z);}","meta":""},"joinVec4":{"code":"vec4 joinVec4(in float x, in float y, in float z, in float w){return vec4(x,y,z,w);}","meta":""},"splitVec2":{"code":"void splitVec2(in vec2 v, out float x, out float y)\\n{\\n    x=v.x;\\n    y=v.y;\\n}","meta":""},"splitVec3":{"code":"void splitVec3(in vec3 v, out float x, out float y, out float z)\\n{\\n    x=v.x;\\n    y=v.y;\\n    z=v.z;\\n}","meta":""},"splitVec4":{"code":"void splitVec4(in vec4 v, out float x, out float y, out float z, out float w)\\n{\\n    x=v.x;\\n    y=v.y;\\n    z=v.z;\\n    w=v.w;\\n}","meta":""},"add":{"code":"float add(in float a, in float b)\\n{\\n    return a+b;\\n}","meta":""},"add2":{"code":"vec2 add2(in vec2 a, in vec2 b)\\n{\\n    return a+b;\\n}","meta":""},"add3":{"code":"vec3 add3(in vec3 a, in vec3 b)\\n{\\n    return a+b;\\n}","meta":""},"add4":{"code":"vec4 add4(in vec4 a, in vec4 b)\\n{\\n    return a+b;\\n}","meta":""},"sub":{"code":"float sub(in float a, in float b)\\n{\\n    return a-b;\\n}","meta":""},"sub2":{"code":"vec2 sub2(in vec2 a, in vec2 b)\\n{\\n    return a-b;\\n}","meta":""},"sub3":{"code":"vec3 sub3(in vec3 a, in vec3 b)\\n{\\n    return a-b;\\n}","meta":""},"sub4":{"code":"vec4 sub4(in vec4 a, in vec4 b)\\n{\\n    return a-b;\\n}","meta":""},"mul":{"code":"float mul(in float a, in float b)\\n{\\n    return a*b;\\n}","meta":""},"mul2":{"code":"vec2 mul2(in vec2 a, in vec2 b)\\n{\\n    return a*b;\\n}","meta":""},"mul3":{"code":"vec3 mul3(in vec3 a, in vec3 b)\\n{\\n    return a*b;\\n}","meta":""},"mul4":{"code":"vec4 mul4(in vec4 a, in vec4 b)\\n{\\n    return a*b;\\n}","meta":""},"div":{"code":"float div(in float a, in float b)\\n{\\n    return a/b;\\n}","meta":""},"div2":{"code":"vec2 div2(in vec2 a, in vec2 b)\\n{\\n    return a/b;\\n}","meta":""},"div3":{"code":"vec3 div3(in vec3 a, in vec3 b)\\n{\\n    return a/b;\\n}","meta":""},"div4":{"code":"vec4 div4(in vec4 a, in vec4 b)\\n{\\n    return a/b;\\n}","meta":""},"dot2":{"code":"float dot2(in vec2 a, in vec2 b)\\n{\\n    return dot(a,b);\\n}","meta":""},"dot3":{"code":"float dot3(in vec3 a, in vec3 b)\\n{\\n    return dot(a,b);\\n}","meta":""},"dot4":{"code":"float dot4(in vec4 a, in vec4 b)\\n{\\n    return dot(a,b);\\n}","meta":""},"cross2":{"code":"void cross2(){return;}","meta":""},"cross3":{"code":"vec3 cross3(in vec3 a, in vec3 b)\\n{\\n    return cross(a,b);\\n}","meta":""},"cross4":{"code":"void cross4(){return;}","meta":""},"sel":{"code":"float sel(in float c, in float a, in float b)\\n{\\n    if (c!=0.0)\\n    {\\n        return a;\\n    }\\n    else\\n    {\\n        return b;\\n    }\\n}","meta":""},"sel2":{"code":"vec2 sel2(in float c, in vec2 a, in vec2 b)\\n{\\n    if (c!=0.0)\\n    {\\n        return a;\\n    }\\n    else\\n    {\\n        return b;\\n    }\\n}","meta":""},"sel3":{"code":"vec3 sel3(in float c, in vec3 a, in vec3 b)\\n{\\n    if (c!=0.0)\\n    {\\n        return a;\\n    }\\n    else\\n    {\\n        return b;\\n    }\\n}","meta":""},"sel4":{"code":"vec4 sel4(in float c, in vec4 a, in vec4 b)\\n{\\n    if (c!=0.0)\\n    {\\n        return a;\\n    }\\n    else\\n    {\\n        return b;\\n    }\\n}","meta":""},"eq":{"code":"float eq(in float a, in float b)\\n{\\n    return float(a==b);\\n}","meta":""},"eq2":{"code":"float eq2(in vec2 a, in vec2 b)\\n{\\n    return float(a==b);\\n}","meta":""},"eq3":{"code":"float eq3(in vec3 a, in vec3 b)\\n{\\n    return float(a==b);\\n}","meta":""},"eq4":{"code":"float eq4(in vec4 a, in vec4 b)\\n{\\n    return float(a==b);\\n}","meta":""},"neq":{"code":"float neq(in float a, in float b)\\n{\\n    return float(a!=b);\\n}","meta":""},"neq2":{"code":"float neq2(in vec2 a, in vec2 b)\\n{\\n    return float(a!=b);\\n}","meta":""},"neq3":{"code":"float neq3(in vec3 a, in vec3 b)\\n{\\n    return float(a!=b);\\n}","meta":""},"neq4":{"code":"float neq4(in vec4 a, in vec4 b)\\n{\\n    return float(a!=b);\\n}","meta":""},"greater":{"code":"float greater(in float a, in float b)\\n{\\n    return float(a>b);\\n}","meta":""},"greatereq":{"code":"float greatereq(in float a, in float b)\\n{\\n    return float(a>=b);\\n}","meta":""},"less":{"code":"float less(in float a, in float b)\\n{\\n    return float(a<b);\\n}","meta":""},"lesseq":{"code":"float lesseq(in float a, in float b)\\n{\\n    return float(a<=b);\\n}","meta":""},"uv0":{"code":"vec2 uv0(){return vUv0;}","meta":""},"texSample":{"code":"vec4 texSample(in sampler2D tex, in vec2 uv) \\n{\\n    return texture2D(tex, uv);\\n}","meta":""}}';

export { coreNodesJSONString };
