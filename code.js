/**
 * Created by zhangcheng on 15/5/23.
 */
var data = [
    {exerciseType: '简答题', difficulty: '3', score:'1',title: '微观市场营销和宏观市场营销的区别表现在哪?', tips: [ {tip: {name:"提示一",content:"市场营销学的微观与宏观的区分"}}, {tip: {name:"提示二",content:"市场营销学"}} ],answer:'微观与宏观的区别，不仅在于前者与小规模的个别企业有关，后者与国家、地区的总体有关，关键是营销活动的福利焦点不同。一般说来，微观营销活动面向的是企业福利，而宏观营销活动面向的是社会福利。'},
    {exerciseType: '填空题', difficulty: '2', score:'1', title: '一定型号V带内弯曲应力的大小，与_________成反比关系。', tips: [ {tip: {name:"提示一",content:"带传动的工作能力分析"}} ],answer:'带轮的直径'}
];

var Exercises = React.createClass({
    render: function() {
        var exerciseNodes = this.props.data.map(function (exercise) {
            return (
                <div className="exercise">
                    <Attribute data={exercise}/>
                    <Title data={exercise.title}/>
                    <Tips data={exercise.tips}/>
                    <Note data={exercise.answer}/>
                </div>
                );
        });
        return (
            <div className="exercises">
        {exerciseNodes}
            </div>
            );
    }
});

var Attribute = React.createClass({
    render: function() {
        return (
            <div className="attribute">
                <ExerciseType data={this.props.data.exerciseType}/>
                <Difficulty  data={this.props.data.difficulty}/>
                <Score  data={this.props.data.score}/>
            </div>
            );
    }
});

var ExerciseType = React.createClass({
    render: function() {
        return (
            <span className="exerciseType">
            题型：{this.props.data}
            </span>
            );
    }
});

var Difficulty = React.createClass({
    render: function() {
        return (
            <span className="difficulty">
            难度：{this.props.data}
            </span>
            );
    }
});

var Score = React.createClass({
    render: function() {
        return (
            <span className="score">
            本题满分：{this.props.data}
            </span>
            );
    }
});

var Title = React.createClass({
    render: function() {
        return (
            <div className="title">
            {this.props.data}
            </div>
            );
    }
});

var Tips = React.createClass({
    render: function() {
        var tipNodes = this.props.data.map(function (tip) {
            return (
                <div className="tip">
                {tip.tip.name}：{tip.tip.content}
                </div>
                );
        });
        return (
            <div className="tips">
        {tipNodes}
            </div>
            );
    }
});

var Note = React.createClass({
    render: function() {
        return (
            <div className="note">
            题解：{this.props.data}
            </div>
            );
    }
});

React.render(
    <Exercises data={data}/>,
    document.getElementById('content')
);