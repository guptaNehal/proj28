class launcher{
    constructor(A,B){
        var options={
            bodyA:A,
            pointB:B,
            lenght:1,stiffness:0.005
        }
        this.chain=Constraint.create(options)
        World.add(world,this.chain)
    }
    fly(){

        this.chain.bodyA=null;
    }
attach(a){
    this.chain.bodyA=a
}
}