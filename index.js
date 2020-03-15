const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/course', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('MongoDB connected...');
  });

  const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
  });
  // Model
  // An instance of a model is called a document. 底層MongoDB數據庫創建和讀取文檔
  const Course = mongoose.model('Course', courseSchema);  // Course is Model instance.
  async function createData () {
    const course = new Course({
      name: 'Chinese',
      auther: 'Mary',
      tags: ['language'],
      isPublished: false
    })
    const rlt = await course.save();
    console.log('MongoDB has created: ', rlt);
  }
  // const MyModel = mongoose.model('ModelName', mySchema);
  createData();