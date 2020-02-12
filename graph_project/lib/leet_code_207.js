// View the full problem and run the test cases at:
//  https://leetcode.com/problems/course-schedule/

const canFinish = (numCourses, prerequisites) => {
  // Create a list of in-degree counts
  let inDegrees = new Array(numCourses).fill(0);

  // Increment the corresponding in-degree based on the prerequisites
  prerequisites.forEach(prerequisite => {
    [courseToTake, coursePrerequisite] = prerequisite;
    inDegrees[courseToTake] += 1;
  });

  let stack = [];
  let topological = [];
  for (let idx = 0; idx < inDegrees.length; idx++) {
    if (!inDegrees[idx]) stack.push(idx);
  }

  while (stack.length) {
    let currCourseNum = stack.pop();
    topological.push(currCourseNum);
    prerequisites.forEach(prerequisite => {
      [courseToTake, coursePrerequisite] = prerequisite;
      if (coursePrerequisite === currCourseNum) {
        inDegrees[courseToTake] -= 1;
        if (!inDegrees[courseToTake]) {
          stack.push(courseToTake);
        }
      }
    })
  }

  return topological.length === numCourses;
};
