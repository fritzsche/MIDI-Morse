class MorseProcessor extends AudioWorkletProcessor {
    static get parameterDescriptors() {
        return [
            {
              name: "gain",
              defaultValue: 1,
              minValue: 0,
              maxValue: 1,
              automationRate: "a-rate",
            },
          ];           
    }

    process(inputs, outputs, parameters) {
        const output = outputs[0];
        const input = inputs[0];
        output.forEach((channel) => {
          const inputChannel = input[0];  
          for (let i = 0; i < channel.length; i++) {
            if (parameters.gain[0] === 0) channel[i] = 0; else
               channel[i] = inputChannel[i]//Math.random() * 2 - 1;
          }
        });
        return true;        
    }
}


registerProcessor("morse-processor", MorseProcessor);