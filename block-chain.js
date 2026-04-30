// const genesis = { index: 0, hash: "0" }
function blockChain(data, prev = { index: 0, hash: "0" }) {
  const index = prev.index + 1;

  const hash = hashCode(
    index + prev.hash + JSON.stringify(data)
  );

  const block = {
    index,
    data,
    prev,
    hash,
    chain(nextData) {
      return blockChain(nextData, block);
    }
  };

  return block;
}
// const first = blockChain({ a: 1 });
// console.log(first.index); 
// console.log(first.prev);
// console.log(first.hash === hashCode('10{"a":1}'));
// const second = first.chain({ hello: "world" });
// console.log(second.index);
// console.log(second.prev.hash === first.hash);
