function getAcceleration(obj) {
  if (obj.f !== undefined && obj.m !== undefined && obj.m !== 0) {
    return obj.f / obj.m
  } else if (obj.Δv !== undefined && obj.Δt !== undefined && obj.Δt !== 0) {
    return obj.Δv / obj.Δt
  } else if (obj.d !== undefined && obj.t !== undefined && obj.t !== 0) {
    return (2 * obj.d) / (obj.t * obj.t)
  }
  return "impossible"
}


// console.log(getAcceleration({ f: 10, m: 5 }))   
// console.log(getAcceleration({ f: 10, m: 0 }))  
// console.log(getAcceleration({ Δv: 100, Δt: 50 }))
// console.log(getAcceleration({ Δv: 100, Δt: 0 })) 
// console.log(getAcceleration({ d: 10, t: 2 }))    
// console.log(getAcceleration({ d: 10, t: 0 }))     
// console.log(getAcceleration({ f: 10, m: 5, d: 10, t: 2 })) 
