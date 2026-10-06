(function(root,factory){
  if(typeof module==="object"&&module.exports){module.exports=factory();}
  else{root.MisconceptionEngine=factory();}
})(typeof self!=="undefined"?self:this,function(){
  const LABELS={concept:"Concept selection",procedure:"Procedure",attention:"Attention / reading",confidence:"Confidence calibration"};
  const TESTS={
    concept:"Give two near-identical problems where only the governing concept changes. Ask the learner to choose the method before calculating.",
    procedure:"Give one familiar problem and require a narrated step-by-step solution. Score the first invalid transformation.",
    attention:"Give a short problem with one deliberately easy-to-miss constraint. Require the learner to restate constraints before solving.",
    confidence:"Give a medium-difficulty item, require a probability-of-correctness estimate, then compare confidence with accuracy."
  };
  function empty(){return {events:[],weights:{concept:0,procedure:0,attention:0,confidence:0}}}
  function evidence(confidence){const c=Math.max(0,Math.min(100,Number(confidence)||0));return (100-c)/100+0.5}
  function record(state,topic,cause,confidence,at){
    if(!state||!state.weights||!state.events)state=empty();
    if(!(cause in state.weights))throw new Error("Unknown cause");
    const e=evidence(confidence);
    state.weights[cause]+=e;
    state.events.unshift({topic:String(topic||"Unknown"),cause,confidence:Number(confidence)||0,evidence:e,time:at||new Date().toISOString()});
    return state;
  }
  function ranked(state){return Object.entries(state.weights).sort(function(a,b){return b[1]-a[1]})}
  function recommendation(state){
    const r=ranked(state),top=r[0][0],sum=r.reduce(function(s,x){return s+x[1]},0);
    const confidence=sum? r[0][1]/sum:0;
    return {cause:top,label:LABELS[top],test:TESTS[top],posteriorShare:confidence};
  }
  function serialize(state){return JSON.stringify({schema:1,state},null,2)}
  return {LABELS,TESTS,empty,evidence,record,ranked,recommendation,serialize};
});
