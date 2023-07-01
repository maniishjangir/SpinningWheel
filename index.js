var wheel = document.querySelector('.wheel');
var arrow = document.querySelector('.arrow');
var message = document.querySelector('.message');
var couponText = document.querySelector('.coupon-text');

var counter = 0;
var spinCount = 0;
var sliceCount = 6;
var spinning = false;

var coupons = [
    '10% off',
    '20% off',
    'Free Shipping',
    'Buy One Get One Free',
    '$5 Gift Card',
    '15% off'
];

arrow.addEventListener('click', spinWheel);

function spinWheel() {
    if (spinning) return;
    spinning = true;

    spinCount++;
    counter = spinCount % sliceCount;

    wheel.style.transition = 'transform 3s ease-out';
    wheel.style.transform = 'rotate(' + (counter * 60) + 'deg)';

    setTimeout(function() {
        spinning = false;
        wheel.style.transition = 'none';
        if (spinCount === 1) {
            message.textContent = 'Try again!';
            couponText.textContent = '';
        } else {
            message.textContent = 'Congratulations! You won a coupon!';
            couponText.textContent = coupons[counter];

            setTimeout(function() {
                resetWheel();
            }, 3000);
        }
    }, 3000);
}

function resetWheel() {
    message.textContent = 'Click to Spin Again!';
    arrow.addEventListener('click', spinWheel);
    spinCount = 0;
    couponText.textContent = '';
}