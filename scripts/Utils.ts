function splitMessaeg(text:string) {
  const [mes, peerID] = text.split("|");
  return {
    mes: mes.trim(),
    peerID: peerID.trim()
  };
}