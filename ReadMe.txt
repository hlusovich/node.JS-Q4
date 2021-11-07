#node.JS Q4 2021
There is no necessity to do npm install.
# Params:
CLI needs 3 arguments:
-i, --input : an input file;
-o, --output : an output file;
-c, --config: config for ciphers

Config is a string with pattern {XY(-)}n, where:
X is a cipher mark:
C is for Caesar cipher (with shift 1)
A is for Atbash cipher
R is for ROT-8 cipher
Y is flag of encoding or decoding (mandatory for Caesar cipher and ROT-8 cipher and should not be passed Atbash cipher)
1 is for encoding
0 is for decoding

Config option is required;
You can use stdin instead of using  input
You can use stdout instead of using  output

#RUN:
node my_ciphering_cli -c "..." -i "..." -o "..."

#Example
node my_ciphering_cli --config "C1-C1-R0-A" -i ./input.txt -o ./output.txt
--config "C1-C1-R0-A" - means
"encode by Caesar cipher => encode by Caesar cipher => decode by ROT-8 => use Atbash"
