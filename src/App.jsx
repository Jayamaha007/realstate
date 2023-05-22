import Hero from "./Components/Hero";
import DataInsertion from "./Components/DateInsertion";
import Workouts from "./Components/Workouts";
import Tracker from "./Components/Tracker";
import WorkoutPlans from "./Components/WorkoutPlan";
import Exercise from "./Components/ExerciesePage";
import WorkoutStats from "./Components/WorkoutStats";
import WaterTracker from "./Components/WaterTracker";
import WeekMplans from "./Components/MPlansFTweek";
import PlanDetail from "./Components/MealPlanDetails";

function App() {
  return (
    <>
      <Hero />
      <DataInsertion />
      <Workouts />
      <WaterTracker/>
      <Tracker/>
      <WorkoutStats/>
      <Exercise/>
      <WeekMplans/>
      <PlanDetail/>
    </>
  );
}

export default App;
