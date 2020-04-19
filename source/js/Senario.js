class Scenario
{
  metadata = null;
  steps = {};

  constructor(options)
  {
    if(options.metadata) {
      this.metadata = options.metadata;
    }

    if(options.steps) {
      this.steps = options.steps;
    }


    console.log(this);


  }
}



