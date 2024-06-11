const asyncHandler = (fn) => {
    (req,res,next) => {
        Promise.resolve(fn(req,res,next)).catch((err) => next(err))
    }
}

/*
if async func ,we dont wat to write
Then async task has to be wrapped around Promise.resolve()
*/

//const asyncHandler = () => {}
//const asyncHandler = (func) => {}
//const asyncHandler = (func) => { () => {} }

export {asyncHandler}