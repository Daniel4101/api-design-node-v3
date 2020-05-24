const controllers = {
  delete: (req, res) => {
    console.log('deleted')
    res.send({ message: 'deleted' })
  },
  put: (req, res) => {
    console.log('updated')
    res.send({ message: 'updated' })
  },
  read: (req, res) => {
    console.log('read me pls')
    res.send({ message: 'read me pls' })
  },
  post: (req, res) => {
    console.log("I'm so created ")
    res.send({ message: "I'm so created" })
  }
}
export default controllers
